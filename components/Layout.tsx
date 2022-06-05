import Head from 'next/head'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import type { ReactNode } from 'react'

type LayoutProps = {
  children: ReactNode
}

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta httpEquiv="ScreenOrientation" content="autoRotate:disabled" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
        />
        <meta name="application-name" content="colkito.xyz" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta
          name="apple-mobile-web-app-status-bar-style"
          content="black-translucent"
        />
        <meta name="apple-mobile-web-app-title" content="colkito.xyz" />
        <meta name="description" content="🌱 Welcome to colkito.xyz" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="msapplication-config" content="/browserconfig.xml" />
        <meta name="msapplication-TileColor" content="#059669" />
        <meta name="msapplication-tap-highlight" content="no" />
        <meta name="theme-color" content="#059669" />
        <meta name="HandheldFriendly" content="true" />

        <link rel="shortcut icon" href="/favicon.ico" />
        <link
          rel="preload"
          href="/fonts/TextaAlt/TextaAlt-Regular.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="true"
        ></link>

        <title>Mario Colque — colkito.xyz</title>
      </Head>
      <Navbar />
      {children}
      <Footer />
    </>
  )
}
