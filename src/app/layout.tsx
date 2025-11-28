
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import StoreProvider from '@/contexts/StoreProvider';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Edu-Commerce',
  description: 'An educational e-commerce app',
};

type TRootLayoutProps = {
  children: React.ReactNode;
};

export default function RootLayout({
  children,
}: TRootLayoutProps) {
  return (
    <html lang="en">
      <body className={inter.className}>
       <StoreProvider> 
          <Navbar />
          <main className="container mx-auto px-6 py-8">{children}</main>
        </StoreProvider> 
      </body>
    </html>
  );
}
