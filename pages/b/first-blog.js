import Head from 'next/head'
import Image from 'next/image'
import Meta from '../../components/meta';
import styles from '../../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>First blog</title>
        <Meta />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          First blog
        </h1>

        <p className={styles.description}>
          Hello, this is my first blog.
        </p>

      </main>


    </div>
  )
}
