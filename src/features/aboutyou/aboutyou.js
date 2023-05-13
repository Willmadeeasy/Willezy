// import React from "react";
import  styles from './aboutyou.module.css';
import { Footer } from "../footer/footer";
import { aboutYouSectionData} from "../../Constants";
import Textbox from '../textbox/textbox';
import chevronleft from "../../assets/chevronLeft.png"
import enter from "../../assets/enter.png"
import React, { useState, useEffect } from 'react';
export const Aboutyou = (props) => {
    const [buttonColor, setButtonColor] = useState(() => {
        const color = getComputedStyle(document.documentElement)
          .getPropertyValue("--mercury")
          .trim();
        return color
      });
    const handleLastNameChange = (value) => {
        if (value.trim() !== "") {
            const newcolor = getComputedStyle(document.documentElement)
            .getPropertyValue("--rob-roy")
            .trim();
      
          setButtonColor(newcolor);
        } else {
            const inactivecolor = getComputedStyle(document.documentElement)
            .getPropertyValue("----mercury")
            .trim();
          setButtonColor(inactivecolor);
        }
      };
    
    
    const {
        textbox1Props,
        textbox2Props,
        textbox3Props,
      } = props;
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [responses, setResponses] = useState([]);
   
        const [selectedValue, setSelectedValue] = useState("");
        const [showDefaultOption, setShowDefaultOption] = useState(true);
        useEffect(() => {
            // setShowDefaultOption(selectedValue === '');
          }, [selectedValue]);

        const handleSelect = (event) => {
            // const value = event.target.value;
            setSelectedValue(event);
            // setTimeout(() => {
            //   setSelectedValue(event);
            // }, 10);
            console.log(selectedValue)
          };
        
          
    
    // const questions = [
    //   {
    //     id: 1,
    //     MainQuestion: "Hello there! What's your name?",
    //     subQuestion: "Ensure your full legal name matches with official identification. This is the name that will be reflected in your Will",
    //     inputType: "text"
    //   },
    //   {
    //     id: 2,
    //     text: "What is your age?",
    //     inputType: "number"
    //   },
    //   {
    //     id: 3,
    //     text: "What is your favorite color?",
    //     inputType: "text"
    //   }
    // ];
  
    // const handleResponseChange = (event) => {
    //   const newResponses = [...responses];
    //   newResponses[currentQuestion] = event.target.value;
    //   setResponses(newResponses);
    // };
  
    // const handleNextClick = () => {
    //   setCurrentQuestion(currentQuestion + 1);
    // };
  
    // const handlePreviousClick = () => {
    //   setCurrentQuestion(currentQuestion - 1);
    // };
  
    return (
      <div>
        {/* <h2>Questionnaire</h2> */}
        {/* <form onSubmit={handleNextClick}>
          {questions[currentQuestion] && (
            <label htmlFor={`question-${questions[currentQuestion].id}`}>
              {questions[currentQuestion].text}
            </label>
          )}
          {questions[currentQuestion] && (
            <input
              type={questions[currentQuestion].inputType}
              id={`question-${questions[currentQuestion].id}`}
              value={responses[currentQuestion] || ""}
              onChange={handleResponseChange}
              required
            />
          )}
          {currentQuestion > 0 && (
            <button type="button" onClick={handlePreviousClick}>
              Previous
            </button>
          )}
          {currentQuestion < questions.length - 1 ? (
            <button type="button" onClick={handleNextClick}>
              Next
            </button>
          ) : (
            <button type="submit">Submit</button>
          )}
        </form> */}
        {/* return ( */}
    <div className="container-center-horizontal">
      <div className={styles.screen1}>
        <div className={styles.pagination}>
          <div className={styles.overlapgroup}>
            <div className={styles.rectangle29}></div>
          </div>
          <div className={styles.rectangle}></div>
          <div className={styles.rectangle}></div>
        </div>
        {/* {`${styles.container} ${styles.firstClass} ${styles.secondClass}`} */}
        <div className={styles.buttons}>
          <img className={styles.chevron} src={chevronleft} alt="ChevronLeft" />
          <div className={styles.next}>
            <span className="inter-medium-mine-shaft-20px">{aboutYouSectionData.spanText1}</span>
          </div>
        </div>
        <div className={styles.flexrow}>
          <div className={styles.flexcol}>
            <div className={styles.markers1}>
              <div className={styles.number}>
                <span className="inter-bold-white-16px">{aboutYouSectionData.spanText2}</span>
              </div>
            </div>
            <div className={styles.dropdown}>
            <select
                value={selectedValue}
                onChange={(event) => handleSelect(event.target.value)}
                className={styles.dropdownvalues}
                defaultValue=""
                >
                {showDefaultOption && (
                    <option value="" disabled >
                    Select
                    </option>
                )}
                <option value="Mr.">Mr.</option>
                <option value="Ms.">Ms.</option>
                <option value="Mrs.">Mrs.</option>
                <option value="Miss.">Miss</option>
               
            </select>
            </div>
          </div>
          <div className={styles.frame36}>
            <div className={styles.frame26}>
              <h1 className={styles.hellotherewhatsyourname}>
                <span className="robotoslab-medium-blue-violet-28px">{aboutYouSectionData.spanText4}</span>
              </h1>
              <p className={styles.ensureyourfullleg}>
                <span className="inter-normal-mine-shaft-16px" style={{display: 'block',marginTop: '-35px'}}>{aboutYouSectionData.spanText5}</span>
              </p>
            </div>
            <div className={styles.frame18}>
              <Textbox id="firstname" fieldName="firstname">{textbox1Props}</Textbox>
              <Textbox id="middlename" fieldName="middlename">{textbox2Props}</Textbox>
              <Textbox id="lastname" fieldName="lastname" onLastNameChange={handleLastNameChange}>{textbox3Props}</Textbox>
            </div>
            <div className={styles.buttongrp}>
              <div className={styles.buttons1} style={{ backgroundColor: buttonColor }}>
                <div className={styles.next1 } >
                  <span className="inter-medium-mine-shaft-20px">{aboutYouSectionData.spanText6}</span>
                </div>
              </div>
              <div className={styles.or}>
                <span className="inter-normal-mine-shaft-16px">{aboutYouSectionData.spanText7}</span>
              </div>
              <div className={styles.frame39}>
                <div className={styles.pressenter}>
                  <span className="inter-medium-mine-shaft-20px">{aboutYouSectionData.spanText8}</span>
                </div>
                <img className={styles.enter} src={aboutYouSectionData.enter} alt="Enter" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
        <Footer></Footer>
      </div>
    );
  };
  

