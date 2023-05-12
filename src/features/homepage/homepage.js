import React from "react";
import "./homepage.module.css";
import { Footer } from "../footer/footer";
import  styles from './homepage.module.css';
export const Homepage = () => {
  return (
    <div >
   <div className={styles.home}>Home</div>
   <Footer></Footer>
   </div>
  );
}

// export default homepage;
