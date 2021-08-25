import React from 'react';
import Card from '../../components/cards/cards';
import styles from './projects.module.css';
import { projectList } from '../../data/projects';
import { setting_svg } from "../../components/assests/svg/import_svg"

function ProjectView() {
  return (
    <>
      <div className={styles.main_block}>
        <div className={styles.heading}>
          <h2> Projects <span><img className={styles.spin} src={setting_svg.src.default} alt={setting_svg.icon}></img></span> </h2>
          <section className={styles[`card-list`]}>
            {projectList.map((item, index) => {
              return (
                <>
                  <Card key={index} data={item} />
                </>
              )
            })}
          </section>
        </div>
      </div>
    </>
  )
}

export default ProjectView;