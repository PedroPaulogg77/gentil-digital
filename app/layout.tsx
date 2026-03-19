import type {Metadata} from 'next';
import { Funnel_Display, Montserrat } from 'next/font/google';
import Script from 'next/script';
import './globals.css';

const funnelDisplay = Funnel_Display({
  subsets: ['latin'],
  variable: '--font-display',
  weight: ['300', '400', '500', '600', '700', '800'],
  display: 'optional',
  preload: true,
});

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-body',
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  display: 'optional',
  preload: true,
});

export const metadata: Metadata = {
  title: 'Gentil Digital | Marketing as a Service',
  description: 'Marketing sob medida com equipes gerenciadas alocadas no seu projeto.',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="pt-BR" className={`${funnelDisplay.variable} ${montserrat.variable} scroll-smooth`}>
      <head>
        <Script
          id="gtm-script"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-P9GKJWL');`
          }}
        />
      </head>
      <body className="font-body bg-bg-primary text-text-primary antialiased min-h-screen selection:bg-primary-glow selection:text-white overflow-x-hidden" suppressHydrationWarning>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-P9GKJWL"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
        {children}
      </body>
    </html>
  );
}
