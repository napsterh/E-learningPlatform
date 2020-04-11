import React, { Fragment } from 'react';
//import logo from './logo.svg';
///import './css/uifont.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './css/props.css';
import './css/App.css';
import { useFirebaseApp } from 'reactfire';

//screen
import Header from "./screens/header";
import Siderbar from "./screens/siderbar";
import HomePage from "./screens/home";
import Rightbar from "./screens/rightbar";

import CoursePage from "./screens/course";
import DiscoverPage from "./screens/discover";
import CategoriesPage from "./screens/categories";
import MyCoursesPage from "./screens/mycourses";

import { Route, NavLink, HashRouter } from 'react-router-dom';
import Auth from './Auth';

// <Rightbar/>
function App() {
  const firebase = useFirebaseApp();
  return (
    <div className="App flex">
      <Auth/>
      <HashRouter>
        <Siderbar/>
        <div className="app-content">
          <Route exact path="/" component={HomePage} />
          <Route path="/course/:courseid" component={CoursePage}/>
          <Route path="/descubrir" component={DiscoverPage}/>
          <Route path="/categoria" component={CategoriesPage}/>
          <Route path="/mis-cursos" component={MyCoursesPage}/>
        </div>
      </HashRouter>
    </div>
  );
}

export default App;
