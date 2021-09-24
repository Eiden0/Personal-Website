import React from "react";
import styles from "./intro.module.css";
import { motion } from "framer-motion";
import { BrowserView, MobileView } from "react-device-detect";

const yOffset = "20px";
const easing = [0.645, 0.045, 0.355, 1];

function Intro() {
  const variants = {
    hidden: { y: yOffset, opacity: 0 },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.4,
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { y: yOffset, opacity: 0 },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.4,
        ease: easing,
      },
    },
  };

  const one = (
    <motion.div className={styles.smallHeading} variants={item}>
      <h1>Hello, my name is</h1>
    </motion.div>
  );

  const two = (
    <motion.div variants={item}>
      <h2 className={styles.bigHeading}>Shibashis Das</h2>
    </motion.div>
  );

  const three = (
    <motion.div variants={item}>
      <h3 className={styles.bigHeading}>Student and Developer</h3>
    </motion.div>
  );

  const four = (
    <motion.div className={styles.content} variants={item}>
      <BrowserView>
        <p style={{ whiteSpace: "pre-wrap" }}>
          I am a tech enthusiast. I like to build and explore new things.
          <br />
          I am currently an undergraduate student at IIT Kharagpur doing my
          <br />
          Bachelors in Engineering and a minor in Mathematics and Computing.
          <br />
          I have experience in FullStack Development and writing web apps.
          <br />
        </p>
      </BrowserView>
      <MobileView>
        <p style={{ whiteSpace: "pre-wrap" }}>
          I am a tech enthusiast. I like to build and explore new things. I am
          currently an undergraduate student at IIT Kharagpur doing my Bachelors
          in Engineering and a minor in Mathematics and Computing. I have
          experience in FullStack Development and writing web apps.
        </p>
      </MobileView>
    </motion.div>
  );
  const items = [one, two, three, four];
  return (
    <section className={styles.main_block} id="Home">
      <motion.div className={styles.sub_block}>
        <motion.div initial="hidden" animate="show" variants={variants}>
          {items.map((item, index) => {
            return <span key={index}> {item} </span>;
          })}
        </motion.div>
      </motion.div>
    </section>
  );
}

export default Intro;
