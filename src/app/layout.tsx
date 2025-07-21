import './globals.css';
import type { Metadata } from 'next';
import { PropsWithChildren } from 'react';
import { Inter } from 'next/font/google';
import { ConfigProvider } from 'antd';
import theme from '@/shared/config/antdTheme';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Newsfeed',
  description: 'Newsfeed with infinite scroll',
  icons: {
    icon: '/logo.ico',
  },
};

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en">
      <body className={inter.className} style={{ margin: 0 }}>
        <ConfigProvider theme={theme}>{children}</ConfigProvider>
      </body>
    </html>
  );
}
