import Head from 'next/head'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Fitness Journal</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>
        <nav>
          <a href="/home"> Home </a>
          <a href="/log"> Workout Log </a>
          <a href="/community"> Community </a>
          <a href="/resources"> Resources </a>
        </nav>
      </header>
      <main className={styles.main}>
        <h1>Hello World</h1>
      </main>
      <footer>
        
      </footer>
    </>
  )
}
