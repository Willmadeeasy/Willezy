import './App.css';
import React from 'react';
import {  BrowserRouter as Router, Route, Routes} from "react-router-dom";
import { Homepage } from './features/homepage/homepage'
function App() {
  return (
    <div className="App">
    
      
      <Router>
          <Routes>
            <Route path="/" element={<Homepage/>}> </Route>
          </Routes>
        </Router>
    </div>
  )
  }


export default App;
