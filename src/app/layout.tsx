import '../styles/global.scss';

import { ReactNode } from 'react';
import { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import { Analytics } from '@vercel/analytics/react';
import { Header, Main, Footer } from './layout/exports';
import { AppProviders } from '@/providers/providers';

export const metadata: Metadata = {
  title: 'Raffa-Dev | Portfolio',
  description:
    'Desenvolvedor web front-end, com conhecimento em React, Nextjs, Styled-components, Jest, entre outras tecnologias utilizadas no bom desenvolvimento de aplicações web modernas.',
  authors: { name: 'Rafael da Conceição' },
  viewport: { width: 'device-width', initialScale: 1 },
  verification: { google: 'cCEDzs4cgWkqPsc0WPKXQyDxxnCaGxqZbF6XpjWzX64' }
};

const poppins = Poppins({
  weight: ['300', '600', '700'],
  subsets: ['latin']
});

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-br" className={poppins.className}>
      <body>
        <AppProviders>
          <Header />
          <Main>
            {children}
            <Analytics />
          </Main>
          <Footer />
        </AppProviders>
      </body>
    </html>
  );
}
