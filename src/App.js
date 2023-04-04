import './App.css';
import React, { useState } from 'react';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';

// import {
//   BrowserRouter as Router,
//   Route,
//   Routes,
// } from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type)=>{
    setAlert({  
      msg : message,
      type : type
    })
    setTimeout(() =>{
      setAlert(null);
    }, 1500)
  }

  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark')
      document.body.style.backgroundColor = '#042743'
      showAlert("Dark mode Enabled", "success");
      document.title = 'Textovate | Dark-Mode-Enabled'
      // setInterval(()=>{
      //   document.title = 'Textovate | Transform-your-text-with-ease'
      // }, 1000)
    }
    else{
      setMode('light')
      document.body.style.backgroundColor = 'white'
      showAlert("Light mode Enabled", "success");
      document.title = 'Textovate | Light-Mode-Enabled'
      // setInterval(()=>{
      //   document.title = 'Textovate |  Innovation-in-Text-Transformation'
      // }, 1000)
    }
  }
  return (
    <>
    {/* <Router> */}
   <Navbar title = 'Textovate' aboutText = 'About Us' mode={mode} toggleMode = {toggleMode} />
   <Alert alert = {alert} />
   <div className="container my-3" >
   <TextForm showAlert = {showAlert} heading = 'Enter the Text here' mode={mode} />
   {/* <Routes> */}
        {/* <Route exact path="/" element={<TextForm showAlert = {showAlert} heading = 'Enter the Text here' mode={mode} />} />
        <Route exact path="about/*" element={<About />} />
      </Routes> */}
   </div>
   {/* </Router> */}



   
   
   </>
   
  );
}

export default App;

