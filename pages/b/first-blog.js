import Layout from '@/components/Layout.tsx';
import styles from '@/styles/Home.module.css'

export default function FirstBlog() {
  return (
    <Layout 
      title={"First blog"}
      className={styles.container}
      metaDescription="Andy Merhaut is a technical consultant specializing in application development"
    >
      <main className={styles.main}>
        <h1 className={styles.title}>
          First blog
        </h1>

        <p className={styles.description}>
          Hello, this is my first blog.
        </p>

      </main>
    </Layout>
  )
}
