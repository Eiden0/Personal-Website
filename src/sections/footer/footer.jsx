import React from "react";
import styles from "./footer.module.css";
import { svg } from "../../assests/svg/import_svg";
import { motion } from "framer-motion";

function Footer() {
  return (
    <>
      <section id="contact" className={styles.footer_section}>
        <footer className={styles.container}>
          <div className={styles.left_col}>
            <h2>Get in Touch</h2>
            <p>
              I am always up for a healthy discussion.
              <br /> If you have a question or just want to say hi, you ca
              always drop me a message.
            </p>
            <div>
              <motion.a
                whileTap={{ scale: 0.95 }}
                className={styles.contact_button}
                href="mailto:shibashis12@gmail.com"
              >
                Say Hi
              </motion.a>
            </div>
          </div>
          <div className={styles.right_col}>
            <div className={styles.icons_holder}>
              {svg.map((element) => {
                return (
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    href={element.link}
                    target="_blank"
                    rel="noreferrer"
                    className={styles.svg}
                    key={element.icon}
                  >
                    <img alt={element.icon} src={element.src.default}></img>
                  </motion.a>
                );
              })}
            </div>
          </div>
        </footer>
      </section>
      <footer className={styles.ending_footer}>
        <a
          href="https://github.com/eiden0/eiden0.github.io"
          target="_blank"
          rel="noreferrer"
        >
          {" "}
          Made by eiden with 💙
        </a>{" "}
        <br />
        Inspired by
        <a href="https://brittanychiang.com/" target="_blank" rel="noreferrer">
          {" "}
          Brittany Chiang{" "}
        </a>{" "}
        and{" "}
        <a href="https://leerob.io/" target="_blank" rel="noreferrer">
          {" "}
          Lee Robinson{" "}
        </a>
      </footer>
    </>
  );
}

export default Footer;
