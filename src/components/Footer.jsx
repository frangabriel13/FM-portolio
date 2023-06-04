import React from 'react';
import s from './Footer.module.css';

function Footer() {
  return(
    <div className={s.footer}>
      <div className={s.footerText}>
        <p>Copyright &copy; 2023 by Mandeveloper | All Rights Reserved.</p>
      </div>
      <div className={s.iconTop}>
        <a href=""><i class='bx bx-up-arrow-alt' ></i></a>
      </div>
    </div>
  )
}


export default Footer;