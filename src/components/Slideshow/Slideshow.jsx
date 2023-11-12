import { React, useState } from 'react'
import data from '../../data.json'
import { useParams } from 'react-router-dom';
import chevronLeftIcon  from "../../assets/chevronLeft.svg"
import  chevronRightIcon  from "../../assets/chevronRight.svg"
import styles from './Slideshow.module.css'
import Error from '../../pages/error/error';


const Slideshow = () => {
  const { id } = useParams();
  let item = data.find((item) => item.id === id)
  let [currentIndex, setCurrentIndex] = useState(0);

  if (!item){
    return <Error/>
  }
  function prevImage() {
    setCurrentIndex(currentIndex === 0 ? item.pictures.length - 1 : currentIndex - 1)
  } 
  function nextImage() {
    setCurrentIndex(currentIndex === item.pictures.length -1 ? 0 : currentIndex + 1)
    } 
    return (
    <>
        <section key={id} className={styles.container}>
            {item.pictures.length > 1 ? <img src={chevronLeftIcon} className={styles.iconPrev} alt="Chevron left" onClick={prevImage}/> : null }
            <img className={styles.img} src={item.pictures[currentIndex]} alt="img"/>
            <p className={styles.numbering}>{currentIndex + 1 }/{item.pictures.length}</p>
            {item.pictures.length > 1 ? <img src={chevronRightIcon} className={styles.iconNext} alt="Chevron right" onClick={nextImage}/> : null }
        </section>
    </>
  )
}

export default Slideshow