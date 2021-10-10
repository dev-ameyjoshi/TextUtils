
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";




function App() {
  const [mode, setMode] = useState('light')
  const [alert, setAlert] = useState(null);

  const showAlert = (message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(() =>{
       setAlert(null);
    },1500);
  }

  const toggleMode = () =>{
    if(mode === 'light'){
      setMode( 'dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Enabled Dark Mode","success");
    }else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Enabled Light Mode","success");
    }
  }
  return (
    <>
      <Router>
      <Navbar title = "TextUtils" aboutText = "About " mode = {mode} toggleMode={toggleMode}/>
      <Alert alert ={alert}/>
      <div className = "container my-3">
      <Switch>
          <Route exact path="/about">
            <About mode ={mode} />
          </Route>
          <Route exact path="/">
          <TextForm showAlert ={showAlert}heading =" Try TextUtils - Word Counter and Character Counter,Remove Extra Spaces" mode ={mode}/>
           
          </Route>
        </Switch>
        </div>
      </Router>
      
      {/* <About /> */}
     

    </>
  );
}

export default App;
