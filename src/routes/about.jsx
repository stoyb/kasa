import React from 'react'
import Header from '../components/Header'
import Banner from '../components/Banner'
import Collapse from '../components/Collapse'
import styles from '../styles/about.module.css'

const About = () => {
  return (
    <>
    <Header/>
    <Banner>
    <div className={styles.background}></div>
    </Banner>
    <Collapse>Fiabilité</Collapse>
    <Collapse>Respect</Collapse>
    <Collapse>Service</Collapse>
    <Collapse>Sécurité</Collapse>
    </>
  )
}

export default About