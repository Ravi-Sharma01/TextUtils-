//import logo from './logo.svg';
import './App.css';
import Alert from './components/Alert';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, {useState} from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";


function App() {
  const [mode, setMode] = useState('light');
  const [btnText, textMode] = useState('Dark Mode');
  const [alert, setAlert] = useState(null);

  const showAlert=(message, type)=>{
    setAlert({
      message:message,
      type:type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1200);
  }
 

  const toggleMode=()=>{
    if(mode=== 'light'){
      setMode('dark');
      textMode('Light Mode');
      document.body.style.backgroundColor = "#01051e";
      showAlert("Dark Mode Enabled, succesfully!","success")
    
    }else{
      setMode('light');
      textMode('Dark Mode');
      document.body.style.backgroundColor = "white";
      showAlert("Light Mode Enabled, succesfully!","success")
    }
  }
  return (
    <>
    <Router>
    <Navbar title="textUtilis"  about="About" mode={mode} toggleMode={toggleMode} btnText={btnText} />
    <Alert alert={alert}/>
    <div className="container">
      <Routes>
        <Route exact path="/about" element={<About/>}/>
        <Route exact path="/" element={<TextForm heading="Enter Text Here To Analyze" mode={mode} showAlert={showAlert} />}/> 
      </Routes> 
    </div>
    </Router>
    </>
  );
}

export default App;

