import React from 'react';
import styles from "./contact.module.css"

function ContactView(){
  return(
    <>
      <section className = {styles[`contact-block`]}>
        <header className = {styles.header}>
          <h2> Contact </h2>
          <h3>Send me a message</h3>
        </header>
        <div className = {styles[`form-block`]}>
          <form>
            <label for="name">Name</label> <br/>
            <input className = {styles.input} type="text" id="name" name="name"/> <br/>
            <label for="message">Message</label> <br/>
            <textarea className = {styles.input_textarea} type="email" id="message" name="message"/> <br/>
          </form>
        </div>
      </section>
    </>
  )
}

export default ContactView;