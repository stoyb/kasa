import React from 'react'
import styles from './accomodation.module.css'
import Header from '../../components/Header/Header'
import Slideshow from '../../components/Slideshow/Slideshow'
import { useParams } from 'react-router-dom'
import data from '../../data.json'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import Collapse from '../../components/Collapse/Collapse'

const Accomodation = () => {
  const { id } = useParams();
  let item = data.find((item) => item.id === id)
  let rating = parseInt(item.rating)
    return (
    <>
    <Slideshow className={styles.slideShow}/>
     <div key= {id} className={styles.container}>
       <div className={styles.rows}>
        <div className={styles.locationBloc}>
            <h1 className={styles.title}>{item.title}</h1>
            <p className={styles.location}>{item.location}</p>
            <div className={styles.blocTags}>{item.tags.map((tag,index) => 
              <p className={styles.tag} key={index}>{tag}</p>
              )}
            </div>
        </div>
        <div className={styles.hostBloc}>
            <div> 
              { [1, 2, 3, 4, 5].map((star, index) =>  
                <span key={index} className={rating >= star ? styles.starPink : styles.starGrey}><FontAwesomeIcon icon={faStar} /></span>
              )}
            </div>
            <div className={styles.hostId}>
              <p className={styles.hostIdName}>{item.host.name}</p>
              <img className={styles.hostImg}src={item.host.picture} alt="Host"/>
            </div> 
        </div>
       </div>
       <div className={styles.collapses}>
         <Collapse title="Description" text={item.description} />
         <Collapse title="Équipements" text={item.equipments.map((equi,index) => <li key={index}>{equi}</li>)} />
       </div>
     </div>
    </>
  )
}

export default Accomodation