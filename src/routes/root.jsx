import React from 'react'
import Footer from '../components/Footer'
import { Outlet } from 'react-router-dom'
import styles from '../styles/root.module.css'

const Root = () => {
  return (
    <>
    <div className={styles}>
    <Outlet/>
    <Footer/>
    </div>
    
    </>
  )
}

export default Root
