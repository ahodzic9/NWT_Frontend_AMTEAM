import React from 'react';
import './profil.css';
import Row from "react-bootstrap/Row";
import Link from "react-bootstrap/Row";
//import {BrowserRouter as Router, Switch, Route} from "react-bootstrap";
import InstruktorPocetna from '../instrukcija/instrukcija';
import Kurs from '../kurs/kurs';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
//import { Link } from 'react-bootstrap';

const Profil: React.FC = () => (
  
  <div className="Pocetna">
    <div id="lijeviDiv">
        <text className="tekst">Aktivne instrukcije</text>
        <div className="komponenta"><InstruktorPocetna></InstruktorPocetna></div>
        <div className="komponenta"><InstruktorPocetna></InstruktorPocetna></div>      
      
      <div className="komponenta"><InstruktorPocetna></InstruktorPocetna></div>
      <div className="komponenta"><InstruktorPocetna></InstruktorPocetna></div>      
    </div>
    
  </div>
  
);

export default Profil;
