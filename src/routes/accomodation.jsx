import React from 'react'
import styles from '../styles/accomodation.module.css'
import Header from '../components/Header'
import Slideshow from '../components/Slideshow'
import { useParams } from 'react-router-dom'
import data from '../data.json'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import Collapse from '../components/Collapse'

const Accomodation = () => {
  const { id } = useParams();
  let item = data.find((item) => item.id === id)
  let rating = parseInt(item.rating)
    return (
    <>
    <Header/>
    <Slideshow/>
     <div className={styles.container}>
       <div>
          <h1 className={styles.title}>{item.title}</h1>
          <p className={styles.location}>{item.location}</p>
          <div className={styles.blocTags}>{item.tags.map((tag,index) => 
            <p className={styles.tag} key={index}>{tag}</p>
            )}
          </div>
       </div>
       <div>
          <div> 
            { [1, 2, 3, 4, 5].map((star, index) =>  
              <span key={index} className={rating >= star ? styles.starPink : styles.starGrey}><FontAwesomeIcon icon={faStar} /></span>
            )}
          </div>
           <div>
            <p>{item.host.name}</p>
            <img src={item.host.picture} alt="ImgHost"/>
          </div> 
       </div>
       <div>
         <Collapse title="Description" text={item.description} />
         <Collapse title="Équipements" text={item.equipments.map((equi) => <li>{equi}</li>)} />
       </div>
       

       
     </div>
    </>
  )
}

export default Accomodation