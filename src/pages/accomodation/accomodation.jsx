import React from 'react'
import styles from './accomodation.module.css'
import Slideshow from '../../components/Slideshow/Slideshow'
import { useParams } from 'react-router-dom'
import data from '../../data.json'
import Collapse from '../../components/Collapse/Collapse'
import Error from '../error/error'
import starPink from '../../assets/starPink.svg'
import starGrey from '../../assets/starGrey.svg'


const Accomodation = () => {
  const { id } = useParams();
  let item = data.find((item) => item.id === id)
  if (!item){
    return <Error/>
  }
  let rating = parseInt(item.rating)
    return (
    <>
    <main>
      <Slideshow className={styles.slideShow}/>
      <section key= {id} className={styles.container}>
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
  {[1, 2, 3, 4, 5].map((star, index) => (
    <span key={index}>
      {rating >= star ? 
        <img src={starPink} className={styles.starPink} alt="Pink star" />
        : 
        <img src={starGrey} className={styles.starGrey} alt="Grey star" />
      }
    </span>
  ))}
</div>
            <div className={styles.hostId}>
              <p className={styles.hostIdName}>{item.host.name}</p>
              <img className={styles.hostImg}src={item.host.picture} alt="Host"/>
            </div> 
          </div>
       </div>
       <div className={styles.collapses}>
         <Collapse title="Description" text={item.description} />
         <Collapse title="Équipements" text={
            <ul className={styles.ul}>
              {item.equipments.map((equi, index) => (
                <li key={index} className={styles.li}>{equi}</li>
              ))}
            </ul>
          } />
       </div>
     </section>
    </main>
    </>
  )
}

export default Accomodation