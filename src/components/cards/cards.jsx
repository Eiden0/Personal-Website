import React from 'react';
import styles from './cards.module.css';

function Card({data}) {
  return (
    <>
      <article className={styles.card}>
        <header className={styles[`card-header`]}>
          <p>{data.type}</p>
          <h2>{data.name}</h2>
        </header>
        {/* <div className = {styles[`card-author`]}>
            <a className = {styles[`author-avatar`]} href="#">
              <img src="avatar.png" />
            </a>
            <svg className = {styles[`half-circle`]} viewBox="0 0 106 57">
              <path d="M102 4c0 27.1-21.9 49-49 49S4 31.1 4 4"></path>
            </svg>

            <div class= {styles[`author-name`]}>
              <div className = {styles[`author-name-prefix`]}>Author</div>
              Jeff Delaney
            </div>
          </div> */}
        <div className={styles.tags}>
          {data.tags.map((tag) => {
            return(
              <div key={tag}>{tag}</div>
            )
          })}
        </div>
      </article>
    </>
  )
}

export default Card;