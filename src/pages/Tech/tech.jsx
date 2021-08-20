import React from 'react';
import styles from "./tech.module.css"
import { svg } from "../../components/assests/tech_svg/export_svg"

class TechView extends React.Component {
  render() {
    return (
      <>
        <div className={styles.main_block}>
          <div className={styles.heading}>
            <h2> Tech Stack </h2>
          </div>
          <div className={styles.container}>
            {svg.map(function (item) {
              return (
                <div key={item.icon} className={styles.item}>
                  <img src={item.src.default} alt={item.icon} />
                </div>
              )
            })}
          </div>
        </div>
      </>
    )
  }
}

export default TechView;