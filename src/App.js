import React from 'react';
//import logo from './logo.svg';
import './css/props.css';
import './css/App.css';

//screen
import Header  from "./screens/header";
import Siderbar  from "./screens/siderbar";


function App() {
  return (
    <div className="App flex">
      <Siderbar/>
      <Header/>
    </div>
  );
}

export default App;
