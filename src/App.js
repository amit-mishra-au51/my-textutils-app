import React, { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import { Routes, Route } from "react-router-dom";
// import {
//   Router,
//   Routes,
//   Route,
// } from 'react-router-dom';

function App() {
  const [mode, setMode] = useState('light'); //whether dark mode is enable or not

  const [alert, setAlert] = useState(null);  //alert state

   const showAlert = (message, type) =>{    // show alert for displaying msg 
        setAlert({
          msg : message,
          type : type
        })
        setTimeout(() => {
          setAlert(null)
        }, 2000);
   }

  const toggleMode = () =>{
    if(mode === 'light'){
      setMode('dark')
      document.body.style.backgroundColor = '#042743' ;
      showAlert("Dark mode has been enabled", "success");
    }
    else{
      setMode('light')
      document.body.style.backgroundColor = 'white' ;
      showAlert("Light mode has been enabled", "success");
    }
  }

  return (
  <>
   <Navbar title="TEXTUTILS" aboutText="About Us" mode={mode} toggleMode = {toggleMode}/>
   <Alert alert={alert}/>
   <div className="container my-3">
    <Routes>
    <Route path="/about" element={ <About />} />
    <Route path="/" element={<TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={mode} />} />
      
      {/* <TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={mode} /> */}
      {/* <About/> */}
      </Routes>
   </div>
  </>
   );
}

export default App;
