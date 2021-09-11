import React from 'react';
import styles from './experience.module.css';
import { jobList } from '../../data/job';

function ExperienceView() {
  return (
    <>
      <section className={styles.main_block}>
        <div className={styles.heading}>
          <h2> Experience </h2>
        </div>
        <div className={styles.contentHolder}>
          {jobList.map((item, index) => {
            return(
              <article className={styles.work} key = {index}>
                <div className={styles.jobHeading}>
                  <p style={{float : "left"}}>{item.jobTitle}</p>
                  <p style={{float : "right", fontSize : "18px"}}>{item.date}</p>
                  <div style= {{clear : "both"}}></div>
                </div>
                <div className={styles.subHeading}>
                  {item.companyName}
                </div>
                <div className={styles.content}>
                  {item.desc}
                </div>
            </article>
            )
          })}
        </div>
      </section>
    </>
  )
}

export default ExperienceView;