import React from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom';
import logo from '../assets/logoHeader.png'
import styles from '../styles/Header.module.css'


const Header = () => {
  const location = useLocation();

  return (
    <>
    <header className={styles.header}>
        <Link to="/">
            <img src={logo} className={styles.logo} alt="Logo"/>
        </Link>
        <nav className={styles.nav}>
            <NavLink to="/" className={location.pathname === '/' ? styles.navHomeActive : styles.navHome}>Accueil</NavLink>
            <NavLink to="/about" className={location.pathname === '/about' ? styles.navAboutActive : styles.navAbout}>A propos</NavLink>
        </nav>
    </header>
    </>
  )
}

export default Header