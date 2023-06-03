import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Navbar from './components/Navbar';
import { Home } from './components/Home';
import About from './components/About';
import NoteState from './context/notes/NoteState';
import  Alert  from './components/Alert';
import Signup from './components/Signup';
import Login from './components/Login';
import { useState } from 'react';

function App() {
  const [mode, setmode] = useState('light')
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) =>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(()=>{
      setAlert(null);
    },1500);
  }

  const removeBodyClasses = ()=>{
    // document.body.classList.remove('bg-light')
    // document.body.classList.remove('bg-dark')
    // document.body.classList.remove('bg-primary')
    document.body.classList.remove('bg-success')
    document.body.classList.remove('bg-warning')
    document.body.classList.remove('bg-danger')
  }

  const toggleMode=(cls)=>{
    removeBodyClasses();
    console.log(cls)
    document.body.classList.add('bg-'+cls)
    if(mode === 'light'){
      setmode('dark')
      document.body.style.backgroundColor="#344480" //dark mode color
      showAlert("dark mode has been enable","success") //Alert message
      document.title="TextForm-dark mode"; //title note

      /*setInterval(() => {
        document.title="Amazing dark mode";
      }, 2000);
      */
    }
    else{
      setmode('light')
      document.body.style.backgroundColor="white"
      showAlert("light mode has been enable","success")
      document.title="TextForm-light mode";

      /*setInterval(() => {
        document.title="install text form";
      }, 1500);
      */
    }
}
  return (
    <>
    
      <NoteState>
        <Router>
          <Navbar  mode={mode} toggleMode={toggleMode} />
          <Alert alert={alert} />
          <div className="container">
            <Routes>
              <Route exat path="/" element={<Home mode={mode} showAlert={showAlert}/>} />
              <Route exat path="/about" element={<About mode={mode} />} />
              <Route path="/signup" element={<Signup mode={mode} showAlert={showAlert} />} />
              <Route path="/login" element={<Login mode={mode} showAlert={showAlert} />} />
              
            </Routes>
          </div>
        </Router>
      </NoteState>
    </>
  );
}

export default App;
