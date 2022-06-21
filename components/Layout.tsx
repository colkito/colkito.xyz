import Head from 'next/head'
import LayoutFooter from '@/components/LayoutFooter'
import LayoutHeader from '@/components/LayoutHeader'
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
          content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, user-scalable=no, viewport-fit=cover"
        />
        <meta name="HandheldFriendly" content="true" />

        <link
          rel="preload"
          href="/fonts/TextaAlt/TextaAlt-Regular.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="true"
        ></link>

        <title>Mario Colque — colkito.xyz</title>

        <meta name="application-name" content="colkito.xyz" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        {/* <meta
          name="apple-mobile-web-app-status-bar-style"
          content="black-translucent"
        /> */}
        <meta name="apple-mobile-web-app-title" content="colkito.xyz" />
        <meta name="description" content="🌱 Welcome to colkito.xyz" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="msapplication-config" content="/icons/browserconfig.xml" />
        <meta name="msapplication-TileColor" content="#1F2937" />
        <meta name="msapplication-tap-highlight" content="no" />
        <meta name="theme-color" content="#F9FAFB" />

        {/* <link rel="apple-touch-icon" href="/icons/touch-icon-iphone.png" />
        <link
          rel="apple-touch-icon"
          sizes="152x152"
          href="/icons/touch-icon-ipad.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/icons/touch-icon-iphone-retina.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="167x167"
          href="/icons/touch-icon-ipad-retina.png"
        /> */}

        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/icons/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/icons/favicon-16x16.png"
        />
        <link rel="manifest" href="/manifest.json" />

        <link rel="shortcut icon" href="/favicon.ico" />

        <meta name="twitter:card" content="summary" />
        <meta name="twitter:url" content="https://colkito.xyz" />
        <meta name="twitter:title" content="Mario Colque — colkito.xyz" />
        <meta name="twitter:description" content="🌱 Welcome to colkito.xyz" />
        <meta
          name="twitter:image"
          content="https://colkito.xyz/icons/android-chrome-192x192.png"
        />
        <meta name="twitter:creator" content="@colkitoxyz" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Mario Colque — colkito.xyz" />
        <meta property="og:description" content="🌱 Welcome to colkito.xyz" />
        <meta property="og:site_name" content="Mario Colque — colkito.xyz" />
        <meta property="og:url" content="https://colkito.xyz" />
        <meta
          property="og:image"
          content="https://colkito.xyz/icons/apple-touch-icon.png"
        />
      </Head>

      <div className="min-h-screen">
        <LayoutHeader />
        <main className="py-28">{children}</main>
        <LayoutFooter />
      </div>
    </>
  )
}
