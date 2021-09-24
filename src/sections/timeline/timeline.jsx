import React from "react";
import styles from "./timeline.module.css";
import { timeline } from "@context/timeline";

function TimeLineView() {
  return (
    <>
      <section id="timeline" className={styles.mainBlock}>
        <div className={styles.subBlock}>
          <div className={styles.heading}>
            <h2> Timeline </h2>
          </div>
          <div className={styles.content}>
            {timeline.map((obj) => {
              return (
                <div key = {obj.year}>
                  <h3>{obj.year}</h3>
                  <ul>
                    {obj.elements.map((bullet, index) => {
                      return (
                        <li className={styles.bullet} key={index}>
                          <div className={styles.bulletHeader}>
                            <svg className="h-4 w-4 mr-2" viewBox="0 0 24 24">
                              <g
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              >
                                <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                                <path d="M22 4L12 14.01l-3-3"></path>
                              </g>
                            </svg>
                            <p className={styles.mainPara}>{bullet.head}</p>
                          </div>
                          <p className={styles.subPara}>{bullet.para}</p>
                        </li>
                      );
                    })}
                  </ul>
                  <div className={styles.border}></div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}

export default TimeLineView;
