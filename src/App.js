import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import axios from 'axios';

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Login from "./components/login.js";
import SignUp from "./components/signup.js";
import Chat from "./components/chat.js";
import Poc from "./components/poc.js";
//import Pocetna from './components/Pocetna/Pocetna';
import Pocetna from './pocetna.js';
import Profil from './profilInstruktor.js';

function App() {
  return (<Router>
    <div className="App">
      
      <nav className="navbar navbar-expand-lg navbar-light ">
        <div className="container">
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link className="nav-link" to={"/sign-in"}>Login</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/sign-up"}>Sign up</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      
          <Switch>
            <Route exact path='/' component={Login} />
            <Route path="/sign-in" component={Login} />
            <Route path="/sign-up" component={SignUp} />
            <Route path="/pocetna" component={Pocetna} />
            <Route path="/poc" component={Poc} />
            <Route path="/profil" component={Profil} />
            <Route path="/chat" component={Chat}/>
          </Switch>
       
    </div></Router>
  );
}

export default App;
