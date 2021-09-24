import React from "react";
import SquareCard from "../../components/square_cards/cards";
// import { Card } from "@components";
import styles from "./projects.module.css";
import { projectList } from "@context/projects";
import { setting_svg } from "../../assests/svg/import_svg";
import { AnimateSharedLayout } from "framer-motion";

function ProjectView() {
  return (
    <>
      <div id="work">
        <div className={styles.container}>
          <div className={styles.heading}>
            <h2>
              Some Things I've Built{" "}
              <img
                className={styles.spin}
                src={setting_svg.src.default}
                alt={setting_svg.icon}
              ></img>
            </h2>
          </div>
          <AnimateSharedLayout type="crossfade">
            <div className={styles.project_grid}>
              {projectList.map((project) => {
                return <SquareCard data={project} key ={project.name}/>;
              })}
            </div>
          </AnimateSharedLayout>
        </div>
      </div>
    </>
  );
}

export default ProjectView;
