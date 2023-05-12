import React from "react";
import  styles from './footer.module.css';
import classNames from 'classnames';
import footerimg from '../assets/footerbg.png'
export const Footer = () => {
  return (
    <div className={styles.footerBg}>
        <img src={footerimg} alt="footerbg" className={styles.imgWidth}></img>
    </div>
//    <div className={styles.mainFooter}>
//    <div className={styles.footer}> 
//   <div className={styles.footerblue}>
//   <div className={styles.footercream}>

//   </div>
//    </div> 
//   </div> 
 
// </div>


  );
}