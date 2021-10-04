import Head from 'next/head'
import Image from 'next/image'
import WordCycle from '@/components/word-cycle'
import Layout from '@/components/Layout.tsx';

import styles from '@/styles/Home.module.css'

export default function Home() {
  return (
    <Layout 
      title="Sitecore is... blog by Andy Merhaut" 
      className={styles.container}
      metaDescription="Andy Merhaut is a technical consultant specializing in application development"
    >
      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to the <em>Sitecore is...</em>
          <div>
            <WordCycle words={['efficient','hard','content','headless']} />
          </div>
          blog
        </h1>

        <p className={styles.description}>
          by <a href="https://www.linkedin.com/in/andymerhaut/" title="LinkedIn profile">Andy Merhaut</a>
        </p>

        <div>
          <Image 
              src="/images/andy-merhaut.png" 
              alt="Andy Merhaut"
              width={240}
              height={234}
            />
        </div>

      </main>      
    </Layout>
  )
}
