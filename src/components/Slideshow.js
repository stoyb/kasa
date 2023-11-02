import { React, useState } from 'react'
import data from '../data.json'
import { useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import styles from '../styles/Slideshow.module.css'

const Slideshow = () => {
  const { id } = useParams();
  let item = data.find((item) => item.id === id)
  let [currentIndex, setCurrentIndex] = useState(0);

  function prevImage() {
      setCurrentIndex(currentIndex === 0 ? item.pictures.length - 1 : currentIndex - 1)
    } 
  function nextImage() {
    setCurrentIndex(currentIndex === item.pictures.length -1 ? 0 : currentIndex + 1)
    } 
    return (
    <>
        <div key={id} className={styles.container}>
            <FontAwesomeIcon className={styles.iconPrev} icon={faChevronLeft} onClick={prevImage} />
            <img className={styles.img} src={item.pictures[currentIndex]} alt="img"/>
            <FontAwesomeIcon className={styles.iconNext} icon={faChevronRight} onClick={nextImage} />
        </div>
    </>
  )
}

export default Slideshow