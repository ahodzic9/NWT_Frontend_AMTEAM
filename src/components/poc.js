import React from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../App.css';

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Login from "./login.js";
import SignUp from "./signup.js";
import InstruktorPocetna from './InstruktorPocetna/InstruktorPocetna';
import Pocetna from './Pocetna/Pocetna';
import Dobavljac from './DobavljacPocetna/Dobavljac';
import Dobavljaci from './DobavljaciPocetna/Dobavljaci';
import Profil from './profil/profil';

function App() {
  return (<Router>
    <div className="App">
      
      <nav className="navbar navbar-expand-md navbar-dark bg-dark fixed-top">
        <div className="container">
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <Link className="nav-link" to={"/pocetna"}>Instruktori</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/dobavljaci"}>Dobavljaci</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/profil"}>Profil</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      
          <Switch>
            <Route exact path='/' component={Login} />
            
            <Route path="/pocetna" component={Pocetna} />
            
            <Route path="/instruktor-pocetna" component={InstruktorPocetna} />
            <Route path="/dobavljac" component={Dobavljac} />
            <Route path="/dobavljaci" component={Dobavljaci} />
            <Route path="/profil" component={Profil} />
          </Switch>
       

    </div></Router>
  );
}

export default App;
