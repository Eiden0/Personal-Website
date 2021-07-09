import React from 'react';
import styles from "./contact.module.css"

function ContactView(){
  return(
    <>
      <section className = {styles[`contact-block`]}>
        <header className = {styles.header}>
          <h2> Get in touch me </h2>
        </header>
        <div className = {styles[`form-block`]}>
          <form>
            <label for="fname">Name:</label> <br/>
            <input className = {styles.input} type="text" id="fname" name="fname"/> <br/>
            <label for="email">Email:</label> <br/>
            <input className = {styles.input} type="email" id="email" name="email"/> <br/>
          </form>
        </div>
      </section>
    </>
  )
}

export default ContactView;