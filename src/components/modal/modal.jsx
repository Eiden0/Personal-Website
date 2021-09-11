import React from 'react';
import styles from './modal.module.css';
import {cross} from "../assests/svg/import_svg";

class InnerModal extends React.Component{
  handleClose = () => {
    this.props.closeModal();
  }
  render(){
    let {data} = this.props
    return(
      <article className = {styles.modal}>
        <div className = {styles.content}>
          <div className ={styles.cross}>
            <button type="button" onClick = {this.handleClose} >
              <img src = {cross.src.default} alt = {cross.icon}/>
            </button>
          </div>
          <header className ={styles.header}>
            <p>{data.type}</p>
            <h2>{data.name}</h2>
            <p>{data.description}</p>
          </header>
          <div className = {styles.contentBox}>
            <div className = {styles.desc}>
              <div className = {styles.para}>
                {data.p}
                {data.link &&
                  <p>Link :   
                    <a href = {data.link}  target="_blank" rel="noopener noreferrer" style = {{textDecoration: "none", color: "#e1e7e7"}}>
                       {data.link}
                    </a>
                  </p>
                }
              </div>
              <div className = {styles.list}>
                Technology Used :
                <ul>
                  {data.tech.map((element, index) =>{
                    return(
                      <li>{element}</li>
                    )
                  })}
                </ul>
              </div>
            </div>
            { data.src && 
            <div className = {styles.imageHolder}>
              <img src = {data.src.default} alt = {data.name}></img>
            </div>
            }
          </div>
        </div>
      </article>
    )
  }
}

export default InnerModal