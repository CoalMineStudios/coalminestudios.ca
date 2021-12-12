import type { NextPage } from 'next';
import Head from 'next/head';
import styles from '@/styles/Home.module.css';
import Canary from '@/components/Canary';

const Home: NextPage = () => {
  return (
    <div className="container">
      <Head>
        <title>Coal Mine Studios</title>
      </Head>

      <main className="content">
        <header className="header">
          <Canary className={styles.pinnedCanary} />

          <h1 className="display-heading">Coal Mine Studios</h1>

          <h2 className="display-tag">
            <span>Dream.</span>
            <span>Design.</span>
            <span>Dev.</span>
          </h2>
        </header>

        <p>
          We design and build digital products with UX at their core. Whatever
          you need to make your dream reailty, we&apos;re here for you.
        </p>
      </main>
    </div>
  );
};

export default Home;
