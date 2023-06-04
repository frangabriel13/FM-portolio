import React from 'react';
import s from './Contact.module.css';

function Contact() {
  return(
    <div className={s.contact}>
      <h2 className={s.heading}>Contact <span>Me!</span></h2>
      <form action="#">
        <div className={s.inputBox}>
          <div className={s.inputField}>
            <input type="text" placeholder='Full Name' required />
            <span className={s.focus}></span>
          </div>
          <div className={s.inputField}>
            <input type="text" placeholder='Email Address' required />
            <span className={s.focus}></span>
          </div>
        </div>
        <div className={s.inputBox}>
          <div className={s.inputField}>
            <input type="Number" placeholder='Mobile Number' required />
            <span className={s.focus}></span>
          </div>
          <div className={s.inputField}>
            <input type="text" placeholder='Email Subject' required />
            <span className={s.focus}></span>
          </div>
        </div>
        <div className={s.textareaField}>
          <textarea name="" id="" cols="30" rows="10" placeholder='Your Message' required></textarea>
          <span className={s.focus}></span>
        </div>
        <div className={`${s.btnBox} ${s.btns}`}>
          <button type='submit' className={s.btn}>Enviar</button>
        </div>
      </form>
    </div>
  )
}


export default Contact;