import React from 'react';
import './App.css';
import Home from './components/Home';
import Login from './components/Login';

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import useToken from './components/useToken';

function App() {
  const { token, setToken } = useToken();
  
  if(!token) {
    return(
    
    <Router>
      <Routes>
      <Route path="/" element={<Login setToken={setToken}/>}/>
      <Route exact path="/home" element={<Home/>}/>
    </Routes>
    </Router>

    )
  }

  return (

    <div className="wrapper">
 
    <h1>Application</h1>
    <Router>
      <Routes>
      <Route exact path="/" element={<Login/>}/>
      <Route exact path="/home" element={<Home token={token}/>}/>
    </Routes>
    </Router>
     </div>
  );
}

export default App;
