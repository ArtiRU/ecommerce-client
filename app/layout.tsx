import type { Metadata } from 'next';

import Footer from '@/components/footer';
import Header from '@/components/header';
import { cn } from '@/lib/utils';
import ModalProvider from '@/providers/modal-provider';
import ToastProvider from '@/providers/toast-provider';
import { Urbanist } from 'next/font/google';
import { ReactNode } from 'react';

import '../styles/globals.css';

const inter = Urbanist({ subsets: ['latin'] });

export const metadata: Metadata = {
  description: 'Store',
  title: 'Store',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={cn('flex flex-col', inter.className)}>
        <ModalProvider />
        <ToastProvider />
        <Header />
        <div className="flex-1">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
