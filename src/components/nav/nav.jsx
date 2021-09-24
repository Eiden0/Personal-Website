import React from "react";
import styles from "./nav.module.css";
import { BrowserView } from "react-device-detect";
import { motion } from "framer-motion";

function Navbar() {
  return (
    <>
      <header className={styles.navHeader}>
        <nav>
          <BrowserView>
            <div className={styles.textLogo}>eiden</div>
          </BrowserView>
          <motion.div>
            <a href="#Home">Home</a>
            <a href="#timeline">Timeline</a>
            <a href="#work">Work</a>
            <a href="#contact">Contact</a>
            <motion.a
              whileHover={{ scale: 1.05 }}
              href={process.env.PUBLIC_URL + "Shibashis_Das_CV.pdf"}
              target="_blank"
              rel="noreferrer"
              className={styles.resume}
            >
              Resume
            </motion.a>
          </motion.div>
        </nav>
      </header>
    </>
  );
}

export default Navbar;
