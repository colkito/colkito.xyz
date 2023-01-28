import Head from 'next/head';
import LayoutFooter from '@/components/LayoutFooter';
import LayoutHeader from '@/components/LayoutHeader';
import type { ReactNode } from 'react';

type LayoutProps = {
  children: ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <title>colkito.xyz — Mario Colque</title>
        <meta name="description" content="🌱 Welcome to colkito.xyz" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="colkito.xyz — Mario Colque" />
        <meta property="og:description" content="🌱 Welcome to colkito.xyz" />
        <meta property="og:site_name" content="colkito.xyz — Mario Colque" />
        <meta property="og:url" content="https://colkito.xyz" />
        <meta property="og:image" content="https://colkito.xyz/icons/og-default.png" />
      </Head>

      <div className="min-h-screen">
        <LayoutHeader />
        <main className="py-28">{children}</main>
        <LayoutFooter />
      </div>
    </>
  );
}
