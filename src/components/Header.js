import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import logo from '../assets/logoHeader.png'
import styles from '../styles/Header.module.css'


const Header = () => {
  return (
    <>
    <header className={styles.header}>
        <Link to="/">
            <img src={logo} className={styles.logo} alt="Logo"/>
        </Link>
        <nav className={styles.nav}>
            <NavLink to="/" className={styles.navHome} activeclassname={styles.navLinkActive}>Accueil</NavLink>
            <NavLink to="/about" className={styles.navAbout} activeclassname={styles.navLinkActive}>A propos</NavLink>
        </nav>
    </header>
    </>
  )
}

export default Header