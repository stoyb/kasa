import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/logoFooter.png'
import  styles from './Footer.module.css'

const Footer = () => {
  return (
    <>
    <footer className={styles.footer}>
    <Link to="/"className={styles.logo}>
        <img src={logo} alt="Logo"/>
    </Link>
    <p className={styles.copyrights}>© 2020 Kasa. All rights reserved</p>
    </footer>
    </>
  )
}

export default Footer