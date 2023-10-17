import React from 'react'
import styles from '../styles/Card.module.css'
import data from '../data.json'
import { Link } from 'react-router-dom'


const Card = () => {
  return (
    <>
    <div className={styles.container}>
      {data.map((item) => (
       <Link key={item.id} className={styles.background}>
        <p className={styles.title}>{item.title}</p>
      </Link>
      ))}
    </div>
    
    </>

  );
}

export default Card