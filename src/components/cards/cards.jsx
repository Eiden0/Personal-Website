import React, { useState } from 'react';
import InnerModal from '../modal/modal';
import styles from './cards.module.css';
import { AnimatePresence, motion } from "framer-motion";

function Card({ data }) {
  const [openModal, setModal] = useState(false);
  const closeModal = () => {
    setModal(false);
  }
  const setModalVisible = () => {
    setModal(true);
  }

  return (
    <>
      <motion.article className={styles.card} onClick={setModalVisible} layoutId={`article-${data.name}`}>
        <motion.header className={styles[`card-header`]} layoutId={`header-${data.name}`} >
          <p>{data.type}</p>
          <h2>{data.name}</h2>
        </motion.header>
        <motion.div className={styles.tags} animate>
          {data.tags.map((tag) => {
            return (
              <div key={tag}>{tag}</div>
            )
          })}
        </motion.div>
      </motion.article>
      {console.log(openModal)}
      <AnimatePresence>
        {openModal && <InnerModal closeModal={closeModal} data={data} key={`${data.name}`} />}
      </AnimatePresence>
    </>
  )
}

export default Card;