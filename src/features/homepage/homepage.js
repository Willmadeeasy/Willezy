import React from "react";
import "./homepage.module.css";
import { Footer } from "../footer/footer";
import  styles from './homepage.module.css';
import Markers1 from "../Markers/Markers";
import willLogo from "../../assets/logo.png";
import connectLine from "../../assets/connectLine.png"
import {Routes, Route, useNavigate} from 'react-router-dom';
import {HomepageConstants} from '../../Constants';
import ChevronRight from '../../assets/ChevronRight.png';

export const Homepage = (props) => {
  const navigate = useNavigate();
    const {
        markersAProps,
        markersBProps,
        markersCProps,
      } = props;
      const navigateAboutyou = () => {
          navigate('/aboutyou')
      }
  return (
    <div >
   <div className={styles.center}>
    <div className={styles.whiteIcon}>
      <img src={willLogo} alt="logo" style={{width:'60px',marginTop:'20px'}}/>
    </div>
    </div>
   
   <div className={styles.container}>
    <h1 className="hello-im-willgenie robotoslab-medium-blue-violet-28px">
          <span className="robotoslab-medium-blue-violet-28px">{HomepageConstants.headerLanding}</span>
    </h1>
    <p className="we-have-a-set-of-32 inter-normal-chicago-16px">
          <span className="inter-normal-chicago-16px">{HomepageConstants.subheaderlanding}</span>
    </p>
    <div className={styles.group19}>
          <div className={styles.frame17}>
            <Markers1>{markersAProps.children}</Markers1>
            <img className={styles.vector1} src={connectLine} alt="Vector 1" />
            <Markers1 className={markersBProps.className}>{markersBProps.children}</Markers1>
            <img className={styles.vector1} src={connectLine} alt="Vector 2" />
            <Markers1 className={markersCProps.className}>{markersCProps.children}</Markers1>
          </div>
          <div className={styles.flexrow}>
            <div className={styles.aboutyou}>
              <span className="inter-semi-bold-blue-violet-16px">{HomepageConstants.spanText3}</span>
            </div>
            <div className={styles.yourlegacy}>
              <span className="inter-semi-bold-blue-violet-16px">{HomepageConstants.spanText4}</span>
            </div>
            <div className={styles.legacymadeeasy}>
              <span className="inter-semi-bold-blue-violet-16px">{HomepageConstants.spanText5}</span>
            </div>
          </div>
          <div className={styles.minutescontainer}>
            <div className={styles.x1215minutes}>
              <span className="inter-normal-chicago-16px">{HomepageConstants.spanText6}</span>
            </div>
            <div className={styles.x2025minutes}>
              <span className="inter-normal-chicago-16px">{HomepageConstants.spanText7}</span>
            </div>
            <div className={styles.x1520minutes}>
              <span className="inter-normal-chicago-16px">{HomepageConstants.spanText8}</span>
            </div>
          </div>
        </div>
        <div className={styles.start}>
            <div className="next inter-medium-mine-shaft-20px" onClick={navigateAboutyou}>
              <img className={styles.startArrow} src={ChevronRight} alt="ChevronRight"></img>
              <span className="inter-medium-mine-shaft-20px"> {HomepageConstants.spanText9}</span>
            </div>
          </div>
    </div>
   <Footer></Footer>
   </div>
  );
}

