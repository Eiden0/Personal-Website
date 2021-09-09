import React from 'react';
import styles from './cd.module.css'
class Cd extends React.Component{
  render(){
    return(
      <> 
        <div className = {`${styles.spinningDisk} ${styles.outerCircle}`} >
          <div className = {styles.innerCircle}></div>
        </div>
      </>
    )
  }
}

export default Cd;