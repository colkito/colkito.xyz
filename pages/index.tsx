import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>colkito.xyz</title>
        <meta name="description" content="colkito.xyz" />
        <link
          rel="icon"
          href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🌱</text></svg>"
        />
        <link
          rel="preload"
          href="/fonts/TextaAlt/TextaAlt-Regular.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="true"
        ></link>
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          🌱 Welcome to <Link href="/hello">colkito.xyz</Link>
        </h1>
      </main>
    </div>
  )
}

export default Home
