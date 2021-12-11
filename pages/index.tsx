import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Canary from '../components/Canary'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Coal Mine Studios</title>
      </Head>

      <main className={styles.content}>
        <header className={styles.header}>
          <Canary className={styles['pinned-mascot']} />

          <h1 className={styles['display-heading']}>Coal Mine Studios</h1>

          <h2 className={styles['display-tag']}>
            <span>Dream.</span>
            <span>Design.</span>
            <span>Dev.</span>
          </h2>
        </header>

        <p>
          We design and build digital products with UX at their core. Whatever
          you need to make your dream reailty, we&apos;re here for you.
        </p>

        <div className={styles.cta}>
          <button className={styles.button}>Get a quote</button>
        </div>
      </main>
    </div>
  )
}

export default Home
