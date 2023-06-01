import React from 'react';
import s from './Home.module.css';

function Home() {
  return (
    <div className={s.homeContainer}>
      <div>
        <h1>Hola, soy <span>Franco Mansilla</span></h1>
        <div>
          <h3>Full Stack Developer</h3>
        </div>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
          Unde neque quod quisquam rem, accusantium distinctio blanditiis quae expedita, 
          tempora aperiam ullam impedit quidem obcaecati ab facere temporibus quam iste mollitia.
        </p>
        <div>
          <a href="#">Contrátame</a>
          <a href="#">Contáctame</a>
        </div>
      </div>
    </div>
  );
}

export default Home;