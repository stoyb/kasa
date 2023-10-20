import React from 'react'
import styles from '../styles/Card.module.css'
import data from '../data.json'
import { Link } from 'react-router-dom'


const Card = () => {
  return (
    <>
    <div className={styles.container}>
      {data.map((item) => (
       <Link to="/accomodation:id" key={item.id} className={styles.background}>
          <img src={item.cover} alt="Appartement" className={styles.img}/>
          <div className={styles.bgimg}>
            <p className={styles.title}>{item.title}</p>
          </div>
      </Link>
      ))}
    </div>
    
    </>

  );
}

export default Card