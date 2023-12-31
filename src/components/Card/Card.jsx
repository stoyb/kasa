import React from 'react'
import styles from './Card.module.css'
import data from '../../data.json'
import { Link } from 'react-router-dom'


const Card = () => {
  return (
    <>
    <section className={styles.bgcontainer}>
      <div className={styles.container}>
        {data.map((item) => (
        <Link to={`/accomodation/${item.id}`} key={item.id} className={styles.background}>
          <img src={item.cover} alt="Appartement" className={styles.img}/>
          <div className={styles.bgimg}>
            <p className={styles.title}>{item.title}</p>
          </div>
        </Link>
      ))}
      </div>
    </section>
    
    </>

  );
}

export default Card