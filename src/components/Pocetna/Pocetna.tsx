import React from 'react';
import styles from './Pocetna.module.css';
import Row from "react-bootstrap/Row";
import Link from "react-bootstrap/Row";
//import {BrowserRouter as Router, Switch, Route} from "react-bootstrap";
import InstruktorPocetna from '../InstruktorPocetna/InstruktorPocetna';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
//import { Link } from 'react-bootstrap';

const Pocetna: React.FC = () => (
  
  <div className="Pocetna">
    
        <div className="komponenta"><InstruktorPocetna></InstruktorPocetna></div>
        <div className="komponenta"><InstruktorPocetna></InstruktorPocetna></div>      
      
      <div className="komponenta"><InstruktorPocetna></InstruktorPocetna></div>
      <div className="komponenta"><InstruktorPocetna></InstruktorPocetna></div>      
      
  </div>
);

export default Pocetna;
