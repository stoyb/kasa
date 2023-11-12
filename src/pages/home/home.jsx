import React from 'react'
import Banner from '../../components/Banner/Banner'
import Card from '../../components/Card/Card'
import styles from './home.module.css'


const Home = () => {
  return (
    <>
    <main>
      <Banner>
        <div className={styles.background}>
          <h1 className={styles.tagline}>Chez vous, partout et ailleurs</h1>
        </div>
      </Banner>
      <Card/>
    </main>
    </>
  )
}

export default Home