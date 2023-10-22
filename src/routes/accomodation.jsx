import React from 'react'
//import styles from '../styles/accomodation.module.css'
import Header from '../components/Header'
import { useParams } from 'react-router-dom'
import data from '../data.json'

const Accomodation = () => {
  const { id } = useParams();
    return (
    <>
    <Header/>
     <div>
         {data
         .filter((item) => item.id === id)
         .map((item) => (
             <div key={id}>
                 <div>
                     {item.pictures.map((picture)=> (
                         <img src={picture}/>
                     ))}
                </div>
                 <p>{item.title}</p>
             </div>
         ))
         }
     </div>
    </>
  )
}

export default Accomodation