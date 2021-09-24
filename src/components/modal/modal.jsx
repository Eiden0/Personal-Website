import React from 'react';
import styles from './modal.module.css';
import {cross} from "../../assests/svg/import_svg";
import {motion} from "framer-motion";

class InnerModal extends React.Component{
  handleClose = () => {
    this.props.closeModal();
  }
  render(){
    let {data} = this.props
    return(
      <>
      <motion.div 
        className = {styles.overlay}
      />
      <motion.article 
        className = {`${styles.modal} ${styles.modalContent}`}
        layoutId={`article-${data.name}`}
      >
        <motion.div className = {styles.content} animate>
          <motion.div className ={styles.cross}>
            <button type="button" onClick = {this.handleClose} >
              <img src = {cross.src.default} alt = {cross.icon}/>
            </button>
          </motion.div>
          {/* <motion.header className ={styles.header} layoutId={`header-${data.name}`}>
            <p>{data.type}</p>
            <h2>{data.name}</h2>
            <p>{data.description}</p>
          </motion.header> */}
          <motion.div className = {styles.contentBox} animate>
            <motion.div className = {styles.desc}>
              <motion.div className = {styles.para}>
                {data.p}
                {data.link &&
                  <p>Link :   
                    <a href = {data.link}  target="_blank" rel="noopener noreferrer" style = {{textDecoration: "none", color: "#e1e7e7"}}>
                       {data.link}
                    </a>
                  </p>
                }
              </motion.div>
              <motion.div className = {styles.list}>
                Technology Used :
                <ul>
                  {data.tech.map((element, index) =>{
                    return(
                      <li>{element}</li>
                    )
                  })}
                </ul>
              </motion.div>
            </motion.div>
            { data.src && 
            <motion.div className = {styles.imageHolder}>
              <img src = {data.src.default} alt = {data.name}></img>
            </motion.div>
            }
          </motion.div>
        </motion.div>
      </motion.article>
      </>
    )
  }
}

export default InnerModal