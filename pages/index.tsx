import type { NextPage } from 'next'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>
          🌱 Welcome to <Link href="/hello">colkito.xyz</Link>
        </h1>
      </main>
    </div>
  )
}

export default Home
