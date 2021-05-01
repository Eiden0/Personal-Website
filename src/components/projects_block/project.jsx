import React from 'react';
import styles from '../projects_block/project.module.css'


class Project extends React.Component{
    render() {
        return(
            <>
                <div className = {styles.main_block}>
                    <h2>Projects</h2>
                </div>

            </>
        )
    }
}

export default Project;