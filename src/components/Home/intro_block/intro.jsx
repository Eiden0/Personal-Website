import React from 'react';
import { svg } from '../../assests/svg/import_svg';
import styles from './intro.module.css';
import code1 from "../../assests/images/code-quote.png"

function Intro() {
  return (
    <>
      <div className={styles.main_block}>
        <section className={styles.sub_block}>
          <article>
            <div>
              <h2 style={{ display: "inline-block" }}>Hi, I am Shibashis Das.</h2>
              <div className={styles.icons_block}>
                {svg.map(function (item) {
                  return (
                    <a href={item.link}><img src={item.src.default} alt={item.icon} /></a>
                  )
                })}
              </div>
            </div>
            I am a tech enthusiast. I like to build and explore new things.<br />
            I love programming, swimming, badminton and travelling and reading books.<br />
            I am currently a undergraduate student at IIT Kharagpur doing my <br />
            B.Tech in Engineering and a minor in Mathematics and Computing.<br />
            I have experience in Frontend and Backend Development and writing web apps.<br />
          </article>
        </section>
        <div className={styles.image_block}>
          <img className={styles.image_quote} src={code1} alt="funky quote" />
        </div>
      </div>
    </>
  )
}

export default Intro;