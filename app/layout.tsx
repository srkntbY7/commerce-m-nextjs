import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import StyledComponentsRegistry from '@/lib/registry';

import MainHeader from '@/ui/main-header/main-header';
import Footer from '@/ui/footer/footer';
import { MainContainer } from '@/ui/main-container/main-container.styles';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Commerce M',
  description: 'Portfolio Ecommerce App',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <StyledComponentsRegistry>
          <MainHeader />
          <main>
            <MainContainer>{children}</MainContainer>
          </main>
          <Footer />
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
