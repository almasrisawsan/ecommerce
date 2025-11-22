
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { CartProvider } from '@/contexts/CartContext';
import Navbar from '@/components/Navbar';

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
        <CartProvider>
          <Navbar />
          <main className="container mx-auto px-6 py-8">{children}</main>
        </CartProvider>
      </body>
    </html>
  );
}
