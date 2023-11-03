import React from 'react'
import Header from '../../components/Header/Header'
import Banner from '../../components/Banner/Banner'
import Card from '../../components/Card/Card'
import styles from './home.module.css'


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