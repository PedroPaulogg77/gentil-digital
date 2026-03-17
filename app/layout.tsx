import type {Metadata} from 'next';
import { Funnel_Display, Montserrat } from 'next/font/google';
import './globals.css';

const funnelDisplay = Funnel_Display({
  subsets: ['latin'],
  variable: '--font-display',
  weight: ['300', '400', '500', '600', '700', '800'],
});

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-body',
  weight: ['300', '400', '500', '600', '700', '800', '900'],
});

export const metadata: Metadata = {
  title: 'Gentil Digital | Marketing as a Service',
  description: 'Marketing sob medida com equipes gerenciadas alocadas no seu projeto.',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="pt-BR" className={`${funnelDisplay.variable} ${montserrat.variable} scroll-smooth`}>
      <head>
      </head>
      <body className="font-body bg-bg-primary text-text-primary antialiased min-h-screen selection:bg-primary-glow selection:text-white overflow-x-hidden" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
