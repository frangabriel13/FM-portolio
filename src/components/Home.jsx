import React from 'react';
import s from './Home.module.css';

function Home() {
  return (
    <div className={`${s.homeContainer} ${s.home}`} id='home'>
      <div className={s.homeContent}>
        <h1>Hola, soy <span>Franco Mansilla</span></h1>
        <div className={s.textAnimate}>
          <h3>Fullstack developer</h3>
        </div>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
          Unde neque quod quisquam rem, accusantium distinctio blanditiis quae expedita, 
          tempora aperiam ullam impedit quidem obcaecati ab facere temporibus quam iste mollitia.
        </p>
        <div className={s.btnBox}>
          <a href="#" className={s.btn}>Contáctame</a>
          <a href="#" className={s.btn}>Descarga CV</a>
        </div>
      </div>
    </div>
  );
}

export default Home;