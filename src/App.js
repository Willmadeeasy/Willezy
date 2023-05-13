import './App.css';
import React from 'react';
import {  BrowserRouter as Router, Route, Routes} from "react-router-dom";
import { Homepage } from './features/homepage/homepage';
import {HomepageConstants} from "./Constants";
import {aboutYouSectionData} from "./Constants";
import { Aboutyou } from './features/aboutyou/aboutyou';
function App() {
  return (
    <div className="App">
    
      
      <Router>
          <Routes>
            <Route exact path="/" element={<Homepage {...HomepageConstants}/>}> </Route>
            <Route path="/aboutyou" element={<Aboutyou {...aboutYouSectionData}/>}> </Route>
          </Routes>
        </Router>
    </div>
  )
  }

export default App;
