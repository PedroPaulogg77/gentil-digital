# Prompt para Claude Code — Otimização PageSpeed gentil-digital.vercel.app

> **Meta: Score Mobile ≥ 95 | Sem perder estética nem usabilidade**
> **Stack: Next.js 14 · Tailwind CSS · Vercel · Google Fonts**

---

## Contexto

O site gentil-digital.vercel.app tirou **score 46 no mobile** no PageSpeed Insights (18/03/2026). As métricas críticas são:

| Métrica | Valor atual | Meta |
|---------|-------------|------|
| FCP | 16,2s | < 1,8s |
| LCP | 19,4s | < 2,5s |
| TBT | 370ms | < 200ms |
| CLS | 0 | manter 0 |
| Speed Index | 16,2s | < 3,4s |

O score desktop já é 98 — o problema é mobile. As causas-raiz identificadas no Lighthouse estão todas documentadas abaixo. Você deve implementar TODAS as correções sem alterar o visual, layout, cores, tipografia ou experiência do usuário.

---

## BLOCO 1 — YOUTUBE EMBEDS (IMPACTO CRÍTICO ~70% do problema)

O site carrega **3 iframes do YouTube** diretamente no HTML. Isso puxa ~2.621 KiB de JS do YouTube (base.js, www-embed-player, etc.), consome 1.237ms na thread principal e é o maior responsável pelo FCP/LCP/TBT ruins.

### O que fazer:

1. **Substituir TODOS os `<iframe>` do YouTube por uma fachada (facade/lite-embed)**. Para cada vídeo:
   - Renderizar apenas uma `<div>` com a thumbnail do vídeo como `background-image` (usar `https://i.ytimg.com/vi/{VIDEO_ID}/hqdefault.jpg`)
   - Colocar um botão de play SVG centralizado por cima (ícone SVG inline, não imagem externa)
   - Carregar o `<iframe>` do YouTube **somente quando o usuário clicar no play** (lazy embed)
   - O iframe deve ser inserido via JavaScript no evento `click`, com `?autoplay=1` no src
   - A thumbnail deve ter `width` e `height` explícitas e `loading="lazy"` se estiver abaixo da dobra

2. **Criar um componente React reutilizável** tipo `YouTubeFacade` ou `LiteYouTube`:
   ```tsx
   // Exemplo de assinatura:
   <YouTubeFacade 
     videoId="itBgl68axJI" 
     title="Título do vídeo"
   />
   ```

3. **Remover os preconnects não usados** para `https://i.ytimg.com` do `<head>`. Atualmente há 3 preconnects duplicados que não são utilizados. Deletar todos.

4. **Adicionar preconnect para `https://static.doubleclick.net`** (economia estimada de 300ms no LCP):
   ```html
   <link rel="preconnect" href="https://static.doubleclick.net" />
   ```
   Obs: Só adicionar se de fato o YouTube embed for carregado (pode ser inserido dinamicamente junto com o iframe).

5. **Verificar se há cookies de terceiros do YouTube** (`__Secure-YNID`, `YSC`, `__Secure-ROLLOUT_TOKEN`, `VISITOR_INFO1_LIVE`). Ao usar facade, esses cookies só serão setados após o clique — o que resolve também a auditoria de "cookies de terceiros" em Práticas Recomendadas.

**IDs dos vídeos no site:** `itBgl68axJI`, `pZMN8OqQ7-4`, `DTf_qEbjfVs`

---

## BLOCO 2 — CSS RENDER-BLOCKING E CSS NÃO USADO

### Problema:
- 1 arquivo CSS de 12,9 KiB (`8ea480d970...css`) está bloqueando a renderização (330ms de duração)
- ~90 KiB de CSS não usado (maioria do YouTube, mas será resolvido pelo Bloco 1)

### O que fazer:

1. **Extrair o CSS crítico (above-the-fold)** e injetá-lo inline no `<head>` como `<style>`:
   - Use `critters` (já tem integração com Next.js) ou configure manualmente
   - No `next.config.js`, habilitar `experimental.optimizeCss: true` se disponível na versão usada
   - Alternativamente, usar o pacote `@next/third-parties` ou `next/script` para adiar CSS não-crítico

2. **Adiar o restante do CSS** com a técnica de `media="print"` + `onload`:
   ```html
   <link rel="stylesheet" href="/css/main.css" media="print" onload="this.media='all'" />
   <noscript><link rel="stylesheet" href="/css/main.css" /></noscript>
   ```

3. **Verificar se o Tailwind CSS está com purge habilitado** no `tailwind.config.js`:
   ```js
   content: ['./src/**/*.{js,ts,jsx,tsx}', './app/**/*.{js,ts,jsx,tsx}']
   ```

---

## BLOCO 3 — JAVASCRIPT: EXECUÇÃO, TAMANHO E POLYFILLS

### Problemas identificados:
- Tempo de execução de JS: 2,5s no total
- Trabalho na thread principal: 4,8s
- JS não usado: 1.519 KiB (maioria YouTube → resolvido no Bloco 1) + 23,5 KiB do chunk próprio `122-54a255c55c4b15c7.js`
- JavaScript legado: 11 KiB de polyfills desnecessários no chunk `255-a41b0d888...a.js` (Array.prototype.at, Array.prototype.flat, Array.prototype.flatMap, Object.fromEntries, Object.hasOwn, String.prototype.trimStart, String.prototype.trimEnd)
- 11 tarefas longas (>50ms) na thread principal

### O que fazer:

1. **Remover polyfills desnecessários** — configurar o browserslist no `package.json` para targets modernos:
   ```json
   "browserslist": [
     "last 2 Chrome versions",
     "last 2 Firefox versions",  
     "last 2 Safari versions",
     "last 2 Edge versions"
   ]
   ```
   Ou no Next.js, usar `experimental.legacyBrowsers: false` (se disponível).

2. **Analisar o bundle** para identificar código não usado:
   ```bash
   ANALYZE=true next build
   ```
   Instalar `@next/bundle-analyzer` se não tiver:
   ```bash
   npm install @next/bundle-analyzer
   ```
   Configurar no `next.config.js`:
   ```js
   const withBundleAnalyzer = require('@next/bundle-analyzer')({ enabled: process.env.ANALYZE === 'true' });
   module.exports = withBundleAnalyzer(nextConfig);
   ```

3. **Fazer code splitting agressivo**: 
   - Qualquer componente que não aparece na viewport inicial deve usar `dynamic()` com `ssr: false` ou `loading`:
     ```tsx
     const HeavySection = dynamic(() => import('./HeavySection'), { 
       ssr: false,
       loading: () => <div className="h-[400px]" /> // placeholder com mesma altura
     });
     ```
   - As seções que estão abaixo da dobra (provavelmente a seção de vídeos, seção de ferramentas orbitais, seção de depoimentos) devem ser lazy-loaded

4. **Adiar scripts de terceiros** — se houver Google Analytics, Google Tag Manager, ou qualquer script externo, usar `next/script` com strategy `lazyOnload`:
   ```tsx
   <Script src="https://www.googletagmanager.com/gtag/js" strategy="lazyOnload" />
   ```

---

## BLOCO 4 — ANIMAÇÕES NÃO COMPOSTAS (CLS / Jank)

### Problema:
13 elementos com animações que usam a propriedade `filter` (blur/brightness), que não é composta e pode causar jank. Esses são os ícones orbitais (Asana, RD Station, Meta Ads, HubSpot, GA4, Google Ads, LinkedIn Ads, Looker Studio, Agendor, Notion) + gradientes animados nos textos.

### O que fazer:

1. **Para as órbitas dos ícones de ferramentas**: 
   - Mover a propriedade `filter` para fora da animação
   - Se o `filter` é usado para efeito hover (brightness/blur), aplicar via `will-change: filter` no elemento OU usar `opacity` em vez de `filter: brightness()` quando possível
   - Se o filter é decorativo (glow), considerar usar `box-shadow` animado ou remover a animação de filter e deixar estático
   - Forçar composição com `transform: translateZ(0)` ou `will-change: transform` nos elementos animados

2. **Para os gradientes animados nos textos** ("Marketing as a Service", "Operação estruturada não."):
   - A animação `gradientShift` usa `background-position-x` que é uma propriedade não-composta
   - Substituir por uma animação com `transform: translateX()` em um pseudo-elemento com o gradiente, ou
   - Usar uma animação CSS que anima `background-position` dentro de um container com `will-change: transform`
   - Alternativamente, usar `@keyframes` que anima `transform` em vez de `background-position`

3. **Para os elementos com `filter: blur(10px)` + `translateX(-50px)`** (animações de entrada de seções):
   - Garantir que a animação usa `will-change: transform, opacity` (não filter)
   - Se possível, remover o `filter: blur()` da animação de entrada e usar apenas `opacity` + `transform`
   - Se o blur é essencial, aplicar `contain: layout style paint` no container

---

## BLOCO 5 — IMAGENS

### Problema:
- Logo "Gentil Digital" (horizontal.png) está sendo servida em 750x101 mas exibida em 252x34 — desperdício de 13 KiB
- Logo usa `loading="lazy"` mas está acima da dobra (prejudica LCP)

### O que fazer:

1. **Logo no header (acima da dobra)**:
   - Remover `loading="lazy"` do logo — ele está no topo da página e deve carregar imediatamente
   - Adicionar `loading="eager"` e `fetchPriority="high"` se for o elemento LCP ou próximo dele
   - No `srcset`, ajustar os tamanhos para servir imagens menores (max 504px de largura para 2x retina)
   - Se possível, converter o logo para SVG (é texto + forma simples)
   
2. **Todas as outras imagens** do site:
   - Garantir que usam o componente `next/image` com `sizes` correto
   - Verificar se imagens abaixo da dobra têm `loading="lazy"`
   - Usar formato WebP/AVIF (Next.js já faz isso automaticamente via `next/image`)

3. **Elemento LCP identificado**:
   O LCP é um `<span>` de texto com classe `text-6xl sm:text-7xl md:text-8xl font-bold text-white tracking-tighter`. Isso significa que o LCP é TEXT-BASED, não uma imagem. O atraso de 3.110ms no "Atraso na renderização do elemento" é causado pelo JS que bloqueia a renderização. As otimizações dos Blocos 1-3 são a solução primária para isso.

---

## BLOCO 6 — FONTES

### Problema:
- Google Fonts (3 arquivos woff2) com economia estimada de 20ms no font-display
- Fontes não estão com `font-display: swap` otimizado

### O que fazer:

1. **Usar `next/font` em vez de link externo para Google Fonts**:
   ```tsx
   import { Inter } from 'next/font/google';
   const inter = Inter({ subsets: ['latin'], display: 'swap' });
   ```
   Isso faz o Next.js hospedar as fontes localmente (elimina request externo para fonts.gstatic.com) e aplica `font-display: swap` automaticamente.

2. Se já usa `next/font`, verificar:
   - Se o `display: 'swap'` está configurado
   - Se está usando `subsets: ['latin']` para reduzir tamanho
   - Se os `preload` estão funcionando corretamente

3. **Preload da fonte principal** no `<head>`:
   ```html
   <link rel="preload" as="font" type="font/woff2" href="/fonts/main-font.woff2" crossorigin />
   ```

---

## BLOCO 7 — CACHE

### Problema:
- Recursos do Doubleclick Ads com cache TTL de apenas 15min (2 KiB) — isso é de terceiros e não controlamos, mas podemos mitigar

### O que fazer:

1. **Verificar os headers de cache dos recursos próprios** no `vercel.json` ou `next.config.js`:
   ```js
   // next.config.js
   async headers() {
     return [
       {
         source: '/_next/static/(.*)',
         headers: [{ key: 'Cache-Control', value: 'public, max-age=31536000, immutable' }]
       },
       {
         source: '/fonts/(.*)',
         headers: [{ key: 'Cache-Control', value: 'public, max-age=31536000, immutable' }]
       }
     ];
   }
   ```

2. Vercel já configura cache automático para assets estáticos do Next.js — verificar se está funcionando.

---

## BLOCO 8 — SEGURANÇA (Práticas Recomendadas — de 77 para 96+)

### Problemas:
- Sem Content Security Policy (CSP)
- Sem Cross-Origin-Opener-Policy (COOP)  
- Sem X-Frame-Options ou frame-ancestors
- Sem Trusted Types

### O que fazer:

1. **Adicionar headers de segurança** no `next.config.js`:
   ```js
   async headers() {
     return [
       {
         source: '/(.*)',
         headers: [
           { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
           { key: 'Cross-Origin-Opener-Policy', value: 'same-origin' },
           { key: 'X-Content-Type-Options', value: 'nosniff' },
           { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
           {
             key: 'Content-Security-Policy',
             value: [
               "default-src 'self'",
               "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.youtube.com https://www.google.com https://static.doubleclick.net https://www.googletagmanager.com",
               "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
               "img-src 'self' data: https://i.ytimg.com https://*.google.com https://*.doubleclick.net",
               "font-src 'self' https://fonts.gstatic.com",
               "frame-src https://www.youtube.com https://www.google.com",
               "connect-src 'self' https://*.google-analytics.com https://*.googleapis.com"
             ].join('; ')
           }
         ]
       }
     ];
   }
   ```
   **ATENÇÃO:** A CSP acima é um ponto de partida. Testar após implementar para garantir que nada quebra. Ajustar conforme necessário.

---

## BLOCO 9 — ACESSIBILIDADE (de 93 para 96+)

### Problemas:
- 5 elementos com contraste insuficiente (texto sobre fundo escuro)
- Botões de navegação do slider com áreas de toque muito pequenas (< 48x48px)

### O que fazer:

1. **Contraste — verificar e corrigir estes elementos**:
   - "Virou commodity." — `text-primary` sobre fundo provavelmente com contraste < 4.5:1
   - Seção com fundo escuro e texto `text-text-muted` no footer
   - O texto "Marketing as a Service" com gradiente
   - Ajustar as cores para atingir ratio ≥ 4.5:1 (usar https://webaim.org/resources/contrastchecker/)

2. **Áreas de toque dos botões do slider**:
   - Os botões "Ir para o slide X" têm `h-4` (16px) — muito pequeno
   - Aumentar para mínimo `h-12 w-12` (48x48px) ou adicionar padding para atingir 48x48px de área clicável:
     ```tsx
     <button className="group relative flex items-center justify-center min-h-[48px] min-w-[48px] cursor-pointer" ...>
     ```

---

## INSTRUÇÕES GERAIS

1. **Ordem de implementação**: Bloco 1 → Bloco 3 → Bloco 2 → Bloco 5 → Bloco 4 → Bloco 6 → Bloco 7 → Bloco 8 → Bloco 9
   (A fachada do YouTube é o maior impacto, seguida por JS optimization)

2. **NÃO alterar**: cores, tipografia, layout, hierarquia visual, copywriting, animações de entrada de seções (apenas otimizar as propriedades CSS usadas)

3. **Testar após cada bloco** rodando `npx next build` para garantir que não há erros

4. **Após todas as implementações**, fazer build de produção e testar no PageSpeed Insights. O score mobile deve ser ≥ 95.

5. **Se alguma das mudanças quebrar o visual**, reverter e encontrar uma abordagem alternativa que preserve a estética

6. **DOM**: O site tem 612 elementos, profundidade 14 e máximo 37 filhos — isso está OK, não precisa mexer

7. **Server Response**: TTFB de 4ms está excelente — o servidor está rápido, o problema é todo client-side

---

## RESUMO DO IMPACTO ESPERADO

| Otimização | Impacto estimado no FCP/LCP |
|---|---|
| Facade YouTube (Bloco 1) | **-12s a -14s** (elimina 2.621 KiB de JS + 1.237ms main thread) |
| JS optimization (Bloco 3) | **-1s a -2s** (reduz TBT e execução) |
| CSS critical path (Bloco 2) | **-300ms a -500ms** |
| Imagens (Bloco 5) | **-100ms** |
| Fontes (Bloco 6) | **-50ms a -100ms** |

A fachada do YouTube sozinha deve levar o score de 46 para ~80+. As demais otimizações combinadas devem chegar a 95+.
