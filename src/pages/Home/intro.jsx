import React from 'react';
import { svg } from '../../components/assests/svg/import_svg';
import styles from './intro.module.css';

function Intro() {
  return (
    <>
      <div className={styles.main_block}>
        <div className={styles.sub_block}>
          <article>
            <div>
              <h2 style={{ display: "inline-block" }}>
                <span className={styles.hi} style={{ color: "#D61313", fontSize: "1.2em" }}>Hi,
                </span> I am Shibashis Das.
              </h2>
              <div className={styles.icons_block}>
                {svg.map(function (item) {
                  return (
                    <a key={item.icon} href={item.link}><img src={item.src.default} alt={item.icon} /></a>
                  )
                })}
              </div>
            </div>
            <p>
            I am a tech enthusiast. I like to build and explore new things.<br />
            My hobbies include programming, swimming and reading books.<br />
            I am currently an undergraduate student at IIT Kharagpur doing my <br />
            Bachelors in Engineering and a minor in Mathematics and Computing.<br />
            I have experience in FullStack Development and writing web apps.<br />
            </p>
          </article>
        </div>
        <div className={styles.image_block}>
          {/* <img className={styles.image_quote} src={code1} alt="funky quote" /> */}
        </div>
        {/* <Cd/> */}
      </div>
    </>
  )
}

export default Intro;