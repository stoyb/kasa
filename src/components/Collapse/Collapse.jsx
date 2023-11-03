import React from 'react'
import { useState } from 'react'
import styles from './Collapse.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';


const Collapse = ({title, text}) => {
  const [isTextVisible, setTextVisibility] = useState(true);

// Changes the initial state for FontAwesomeIcon and text
  const toggleTextVisibility = () => {
    setTextVisibility(!isTextVisible)
  };

  return (
    <>
    <div className={styles.background}>
      <div className={styles.bgcollapse}>
        <p className={styles.title}>{title}</p>
        <FontAwesomeIcon className={isTextVisible ? styles.icon : styles.iconActive} icon={faChevronUp} onClick={toggleTextVisibility}/>
      </div>
      <p className={isTextVisible ? styles.bgtext : styles.bgtextActive}>{text}</p>
    </div>
   
     
    </>
  )
}

export default Collapse