//import logo from './logo.svg';
import './App.css';
import Alert from './components/Alert';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, {useState} from 'react';


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
    <Navbar title="textUtilis"  about="About" mode={mode} toggleMode={toggleMode} btnText={btnText} />
    <Alert alert={alert}/>
    <div className="container">
      <TextForm heading="Enter Text Here To Analyze" mode={mode} showAlert={showAlert} />
    </div>
    
    {/* <About/>
     */}
    </>
  );
}

export default App;

