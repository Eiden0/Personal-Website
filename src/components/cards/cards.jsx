import React, {useState} from 'react';
import InnerModal from '../modal/modal';
import styles from './cards.module.css';

function Card({data}) {
  const [openModal, setModal] = useState(false);
  const closeModal = ()=> {
    setModal(false);
  }
  return (
    <>
    <article className={styles.card}>
        <header className={styles[`card-header`]}>
          <p>{data.type}</p>
          <h2 onClick = {() => setModal(true)}>{data.name}</h2>
        </header>
        <div className={styles.tags}>
          {data.tags.map((tag) => {
            return(
              <div key={tag}>{tag}</div>
            )
          })}
        </div>
      </article>
      {openModal &&
      <div className = {styles.overlay}>
        <div className = {styles.modalContent}>
          <InnerModal closeModal ={closeModal} data = {data}/>
        </div>
      </div>
    } 
    </>
  )
}

export default Card;