import React from 'react';
import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Landing from './components/landing/Landing_Page';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Landing/>}/>
        {/*<Route path='/disqualified'/>*/}
      </Routes>
    </Router>
  );
}

export default App;
