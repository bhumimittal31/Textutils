import React, { useCallback, useState } from 'react'
import './App.css';
import Navbar from './components/Navbar';
import PropTypes from 'prop-types';
import TextForm from './components/TextForm';
import About from './components/About';
import Alerts from './components/Alerts';
import { HashRouter as Router, Route, Routes , Link} from "react-router-dom";


function App() {
  const [mode, setmode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }
  const toggle = () => {
    if (mode === 'light') {
      setmode('dark');
      document.body.style.backgroundColor = '#03204b';
    }
    else {
      setmode('light');
      document.body.style.backgroundColor = 'white';
    }
  }
  return (
    <>
      <Router>
        <Navbar title="TextUtils" mode={mode} togglemode={toggle} />
        <Alerts alert={alert}></Alerts>
        <div className="container my-3" >
          <Routes>
            <Route  exact path="/about" element={<About mode={mode}></About>}>
            </Route>
            <Route exact path="/" element={<TextForm mode={mode} showAlert={showAlert} heading="Enter the text below"></TextForm>}>
            </Route>
          </Routes>
        </div>
      </Router>
    </>
  );
}
Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  about: PropTypes.string.isRequired
}

export default App;
