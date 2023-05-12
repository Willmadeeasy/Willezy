import React from "react";
import "./homepage.module.css";
import { Footer } from "../footer/footer";
import  styles from './homepage.module.css';
import Markers1 from "../Markers1";

const markers11Data = {
    children: "A",
};

const markers12Data = {
    children: "B",
    className: "markers1-1",
};

const markers13Data = {
    children: "C",
    className: "markers1-2",
};
const screen0Data = {
    headerLanding: <React.Fragment>Hello! I&#x27;m Willgenie.<br />I’m here to help you secure your legacy.</React.Fragment>,
    subheaderlanding: <React.Fragment>We have a set of 32 questions broken into 3 parts, which we need you to answer to generate your Will.<br />This entire process typically takes 55-60 minutes to complete.</React.Fragment>,
    spanText3: "About you",
    spanText4: "Your legacy",
    spanText5: "Legacy made easy",
    spanText6: "12-15 minutes",
    spanText7: "20-25 minutes",
    spanText8: "15-20 minutes",
    spanText9: "Let’s get started",
    markers11Props: markers11Data,
    markers12Props: markers12Data,
    markers13Props: markers13Data,
};
export const Homepage = (props) => {
    const {
        vector13,
        vector14,
        markers11Props,
        markers12Props,
        markers13Props,
      } = props;
  return (
    <div >
   <div className={styles.center}><div className={styles.whiteIcon}></div></div>
   
   <div className={styles.container}>
    <h1 className="hello-im-willgenie robotoslab-medium-blue-violet-28px">
          <span className="robotoslab-medium-blue-violet-28px">{screen0Data.headerLanding}</span>
    </h1>
    <p className="we-have-a-set-of-32 inter-normal-chicago-16px">
          <span className="inter-normal-chicago-16px">{screen0Data.subheaderlanding}</span>
    </p>
    <div className={styles.group19}>
          <div className={styles.frame17}>
            <Markers1>{markers11Props.children}</Markers1>
            <img className="vector-1" src={vector13} alt="Vector 13" />
            <Markers1 className={markers12Props.className}>{markers12Props.children}</Markers1>
            <img className="vector-1" src={vector14} alt="Vector 14" />
            <Markers1 className={markers13Props.className}>{markers13Props.children}</Markers1>
          </div>
          <div className={styles.flexrow}>
            <div className={styles.aboutyou}>
              <span className="inter-semi-bold-blue-violet-16px">{screen0Data.spanText3}</span>
            </div>
            <div className={styles.yourlegacy}>
              <span className="inter-semi-bold-blue-violet-16px">{screen0Data.spanText4}</span>
            </div>
            <div className={styles.legacymadeeasy}>
              <span className="inter-semi-bold-blue-violet-16px">{screen0Data.spanText5}</span>
            </div>
          </div>
          <div className={styles.minutescontainer}>
            <div className={styles.x1215minutes}>
              <span className="inter-normal-chicago-16px">{screen0Data.spanText6}</span>
            </div>
            <div className={styles.x2025minutes}>
              <span className="inter-normal-chicago-16px">{screen0Data.spanText7}</span>
            </div>
            <div className={styles.x1520minutes}>
              <span className="inter-normal-chicago-16px">{screen0Data.spanText8}</span>
            </div>
          </div>
        </div>
        <div className={styles.start}>
            {/* <span className={styles.chevronright}> ></span> */}
            <div className="next inter-medium-mine-shaft-20px">
              <span className="inter-medium-mine-shaft-20px">{screen0Data.spanText9}</span>
            </div>
          </div>
    </div>
   <Footer></Footer>
   </div>
  );
}

