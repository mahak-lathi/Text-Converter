//import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import Maintext from './Components/Maintext';
//import About from './Components/About';
import React, {useState} from 'react';
import Alert from './Components/Alert';
//import {
  //BrowserRouter as Router,
  //Switch,
  //Route,
//} from "react-router-dom";


function App() {
  const [mode, setMode] = useState('light');
  const[alert, setAlert] = useState(null);
const showAlert =(message, type)=>{
  setAlert({
    msg : message,
    type : type
  })
  setTimeout(()=>
  {
     setAlert(null);
  },3000);
}

  const toggleMode = ()=>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode has been Enabled", "success");
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been Enabled", "success");
    }

  } 
  return (
    <>
    {/*<Router>*/}
    <Navbar title = "Text Convertor" AboutUs = "About Us"  mode ={mode} toggleMode={toggleMode} />
   <Alert alert={alert}/>
   
   <div className="container my-5">

   {/*<Switch>
          <Route exact path="/about">
            <About />
          </Route> 
          <Route exact path="/">
          <Maintext showAlert={showAlert} heading="Enter your Text" mode={mode}/>
          </Route>
   </Switch>*/}
   <Maintext showAlert={showAlert} heading="Enter your Text" mode={mode}/>
   </div>
  {/*</> </Router>*/}
    </>
  );
  }

export default App;





