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
        <p className={styles.tagline}>Chez vous, partout et ailleurs</p>
      </div>
    </Banner>
    <Card/>
    </>
  )
}

export default Home