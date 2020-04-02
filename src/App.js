import React from 'react';
//import logo from './logo.svg';
///import './css/uifont.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './css/props.css';
import './css/App.css';

//screen
import Header  from "./screens/header";
import Siderbar  from "./screens/siderbar";
import HomePage  from "./screens/home";
import Rightbar  from "./screens/rightbar";


function App() {
  return (
    <div className="App flex">
      <Siderbar/>
      <div className="app-content">
      <HomePage/>
      </div>
      <Rightbar/>
    </div>
  );
}

export default App;
