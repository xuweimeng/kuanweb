import Head from 'next/head'
import Link from 'next/link'
import styles from "./index.module.scss";
import utilStyles from '../../styles/utils.module.scss'

const name = 'Your Name'
export const siteTitle = 'Next.js Sample Website'

export default function Layout({ children, home }: Readonly<{ children: React.ReactNode; home: any}>) {
  return (
    <div className={styles.container}>
   
      <header className={styles.header}>
       
      </header>
      {!home && (
        <div className={styles.backToHome}>
          <Link href="/">
            <a>← Back to home</a>
          </Link>
        </div>
      )}
    </div>
  )
}