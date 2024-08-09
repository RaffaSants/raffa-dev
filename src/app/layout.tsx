import '../styles/global.scss';

import { ReactNode } from 'react';
import { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import { Analytics } from '@vercel/analytics/react';
import StyledComponentsRegistry from '@/styles/styled-components/registry';
import { ThemeContextProvider } from '@/contexts/theme';
import { Header, Main, Footer } from './components/layout/exports';

export const metadata: Metadata = {
  title: 'Raffa-Dev | Portfolio',
  description:
    'Desenvolvedor web front-end, com conhecimento em React, Nextjs, Styled-components, Jest, entre outras tecnologias utilizadas no bom desenvolvimento de aplicações web modernas.',
  authors: { name: 'Rafael da Conceição' },
  viewport: { width: 'device-width', initialScale: 1 },
  verification: { google: 'cCEDzs4cgWkqPsc0WPKXQyDxxnCaGxqZbF6XpjWzX64' }
};

const poppins = Poppins({
  weight: ['300', '700'],
  subsets: ['latin']
});

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-br" className={poppins.className}>
      <StyledComponentsRegistry>
        <body>
          <ThemeContextProvider>
            <Header />
            <Main>
              {children}
              <Analytics />
            </Main>
            <Footer />
          </ThemeContextProvider>
        </body>
      </StyledComponentsRegistry>
    </html>
  );
}
