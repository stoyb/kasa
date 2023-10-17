import React from 'react'
import styles from '../styles/Collapse.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';

function handleClick() {
 alert("Hello, world")

}

const Collapse = ({title, text}) => {
  return (
    <>
     <div className={styles.background}>
         <p className={styles.title}>{title}</p>
         <FontAwesomeIcon className={styles.icon}icon={faChevronUp} onClick={() => handleClick()}/>
     </div>
     <div>{text}</div>
    </>
  )
}

export default Collapse