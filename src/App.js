import './App.css';
import React from 'react';
import {  BrowserRouter as Router, Route, Routes} from "react-router-dom";
import { Homepage } from './features/homepage/homepage'
function App() {
  return (
    <div className="App">
    
      
      <Router>
          <Routes>
            <Route path="/" element={<Homepage {...screen0Data}/>}> </Route>
          </Routes>
        </Router>
    </div>
  )
  }
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
    fab: "https://anima-uploads.s3.amazonaws.com/projects/645abab780e176ffd5ddce4c/releases/645b74aa1c3980762121e0d2/img/fab-1@2x.png",
    spanText1: <React.Fragment>Hello! I&#x27;m Willgenie.<br />I’m here to help you secure your legacy.</React.Fragment>,
    spanText2: <React.Fragment>We have a set of 32 questions broken into 3 parts, which we need you to answer to generate your Will.<br />This entire process typically takes 55-60 minutes to complete.</React.Fragment>,
    vector13: "https://anima-uploads.s3.amazonaws.com/projects/645abab780e176ffd5ddce4c/releases/645b74aa1c3980762121e0d2/img/vector-14-1@2x.png",
    vector14: "https://anima-uploads.s3.amazonaws.com/projects/645abab780e176ffd5ddce4c/releases/645b74aa1c3980762121e0d2/img/vector-14-1@2x.png",
    spanText3: "About you",
    spanText4: "Your legacy",
    spanText5: "Legacy made easy",
    spanText6: "12-15 minutes",
    spanText7: "20-25 minutes",
    spanText8: "15-20 minutes",
    bg: "https://anima-uploads.s3.amazonaws.com/projects/645abab780e176ffd5ddce4c/releases/645b74aa1c3980762121e0d2/img/bg-1@2x.png",
    chevronright: "https://anima-uploads.s3.amazonaws.com/projects/645abab780e176ffd5ddce4c/releases/645b74aa1c3980762121e0d2/img/chevronright-1@2x.png",
    spanText9: "Let’s get started",
    markers11Props: markers11Data,
    markers12Props: markers12Data,
    markers13Props: markers13Data,
};




export default App;
