import React from 'react'
import Header from '../components/Header'
import Banner from '../components/Banner'
import Card from '../components/Card'
import styles from '../styles/home.module.css'


const Home = () => {
  return (
    <>
    <Header/>
    <Banner>
      <div className={styles.background}>
        <h1 className={styles.tagline}>Chez vous, partout et ailleurs</h1>
      </div>
    </Banner>
    <Card/>
    </>
  )
}

export default Home