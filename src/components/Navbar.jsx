import React from 'react';
import s from './Navbar.module.css';

function Navbar() {
  return (
    <div className={s.container}>
        <a href="#home" className={s.logo}>Franco.</a>
        <div className={`bx bx-menu ${s.menuIcon}`} id='menu-icon'></div>
        <nav className={s.navbar}>
            <a href="#home" className={s.active}>Inicio</a>
            <a href="#about">Sobre mí</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Proyectos</a>
            <a href="#contact">Contacto</a>
        </nav>
    </div>
  );
}

export default Navbar;