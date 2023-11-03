import React from 'react'
import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header/Header'
import { Outlet } from 'react-router-dom'
import styles from './root.module.css'

const Root = () => {
  return (
    <>
    <div className={styles}>
    <Header/>
    <Outlet/>
    <Footer/>
    </div>
    
    </>
  )
}

export default Root
