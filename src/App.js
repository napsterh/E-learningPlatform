import React, { Fragment } from 'react';
//import logo from './logo.svg';
///import './css/uifont.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './css/props.css';
import './css/App.css';
import { useFirebaseApp } from 'reactfire';
import Auth from './Auth';
import { useUser } from 'reactfire';

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


// <Rightbar/>
function App() {
  const firebase = useFirebaseApp();
  const user = useUser();
  return (
    <div className="App flex">
      <HashRouter>
        <div className="app-content">
          {user ? (<HomePage/>) : (<Auth/>)}
          <Route path="/home" component={HomePage} />
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
