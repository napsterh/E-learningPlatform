import React from 'react';
//import logo from './logo.svg';
//import '../node_modules/font-awesome/css/font-awesome.min.css';
import './css/uifont.css';
import './css/props.css';
import './css/App.css';

//screen
import Header  from "./screens/header";
import Siderbar  from "./screens/siderbar";


function App() {
  return (
    <div className="App flex">
      <Siderbar/>

    </div>
  );
}

export default App;
