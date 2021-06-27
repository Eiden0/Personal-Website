import React from 'react';
import Card from '../../components/cards/cards';
import styles from './projects.module.css';

function ProjectView() {
  return (
    <>
      <div className={styles.main_block}>
        <div className={styles.heading}>
          <h2>Projects</h2>
          <section className={styles[`card-list`]}>
            <Card />
            <Card />
            <Card />
            <Card />
          </section>
        </div>
      </div>
    </>
  )
}

export default ProjectView;