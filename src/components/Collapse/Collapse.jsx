import React from 'react'
import { useState } from 'react'
import styles from './Collapse.module.css'
import chevronUpIcon from '../../assets/chevronUp.svg'


const Collapse = ({title, text}) => {
  const [isTextVisible, setTextVisibility] = useState(true);

// Changes the initial state for FontAwesomeIcon and text
  const toggleTextVisibility = () => {
    setTextVisibility(!isTextVisible)
  };

  return (
    <>
    <div className={styles.background}>
      <div className={styles.bgcollapse} onClick={toggleTextVisibility}>
        <p className={styles.title}>{title}</p>
        <img src={chevronUpIcon} className={isTextVisible ? styles.icon : styles.iconActive} alt="Chevron up"/>
      </div>
      <div className={isTextVisible ? styles.bgtext : styles.bgtextActive}>{text}</div>
    </div>
    </>
  )
}

export default Collapse