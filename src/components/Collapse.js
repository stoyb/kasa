import React from 'react'
import styles from '../styles/Collapse.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';

const Collapse = ({children}) => {
  return (
    <>
     <div className={styles.background}>
         <p className={styles.title}>{children}</p>
         <FontAwesomeIcon className={styles.icon}icon={faChevronUp} />
     </div>
    </>
  )
}

export default Collapse