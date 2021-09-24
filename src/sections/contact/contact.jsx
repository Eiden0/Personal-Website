import React from 'react';
import styles from "./contact.module.css"

function ContactView(){
  return(
    <>
      <section className = {styles[`contact-block`]}>
        <header className = {styles.header}>
          <h2> Contact </h2>
        </header>
        <div className = {styles[`form-block`]}>
          {/* <h3 style = {{textAlign : "left", margin : "15px", color : "black"}}>Say Hello</h3> */}
          
          <form>
            <label for="name" >NAME</label> <br/>
            <input className = {styles.input} type="text" id="name" name="name" placeholder = "Your name"/> <br/>
            <label for="email" >EMAIL</label> <br/>
            <input className = {styles.input} type="text" id="email" name="email" placeholder = "Email Address"/> <br/>
            <label for="subject" >SUBJECT</label> <br/>
            <input className = {styles.input} type="text" id="subject" name="subject" placeholder = "Choose Subject"/> <br/>
            <label for="message" >MESSAGE</label> <br/>
            <textarea className = {styles.input_textarea} type="email" id="message" name="message" placeholder = "Start typing here"/> <br/>
            <input type="submit" value="Submit"></input>
          </form>
        </div>
      </section>
    </>
  )
}

export default ContactView;