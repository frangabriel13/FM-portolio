import React from 'react';
import s from './About.module.css';
import image from '../assets/yoCuadrada.png'

function About() {
  return(
    <div className={s.about} id='about'>
      <h2 className={s.heading}>Acerca <span>de mí</span></h2>
      <div className={s.aboutImg}>
        <img src={image} alt="" />
        <span className={s.circleSpin}></span>
      </div>
      <div className={s.aboutContent}>
        <h3>Full Stack Developer!</h3>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut aliquid hic atque veritatis, 
          voluptatibus ipsa illo qui odit dignissimos dolores, quam maxime. 
          Dolore et nostrum cumque quaerat itaque maiores, perferendis facilis, 
          quod quam consequuntur cum. Consequuntur rem labore assumenda harum obcaecati sunt omnis perspiciatis. 
          Quam veritatis dolores tenetur molestias repudiandae! hostia.</p>
          <div className={`${s.btnBox} ${s.btns}`}>
            <a href="#" className={s.btn}>Read More</a>
          </div>
      </div>
    </div>
  )
}

export default About;