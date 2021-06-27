import React from 'react';
import styles from './cards.module.css';

function Card() {
  return (
    <>
      <article className={styles.card}>
        {/* <div className={styles.bg}></div> */}
        <div className={styles.content}>
          <header className={styles[`card-header`]}>
            <p>Sep 11th 2020</p>
            <h2>Never forget</h2>
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
            <a href="#">html</a>
            <a href="#">css</a>
            <a href="#">web-dev</a>
          </div>
        </div>
      </article>
    </>
  )
}

export default Card;