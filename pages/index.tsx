import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/header'
import MainLayout from '../layouts/main'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <MainLayout>
      <main className={styles.main}>
        <h1 className={styles.title}>Welcome to Preppy</h1>
        <p>Pratice and get ready for your coding interviews</p>
      </main>
    </MainLayout>
  )
}

export default Home
