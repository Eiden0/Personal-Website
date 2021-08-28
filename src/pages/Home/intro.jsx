import React from 'react';
import { useEffect } from 'react';
import { svg } from '../../components/assests/svg/import_svg';
import styles from './intro.module.css';
import code1 from "../../components/assests/images/code-quote.png"

function Intro() {
  useEffect(() => {
    //preloading image
    const img = new Image();
    img.src = code1;
  }, []);
  return (
    <>
      <div className={styles.main_block}>
        <section className={styles.sub_block}>
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
        </section>
        <div className={styles.image_block}>
          <img className={styles.image_quote} src={code1} alt="funky quote" />
        </div>
      </div>
    </>
  )
}

export default Intro;