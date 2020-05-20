import React, { Component, useImperativeHandle } from "react";
import { useHistory } from 'react-router-dom';
import SignUp from "../components/signup.js";
import  './login.css';
import axios from 'axios';
import './profil.css';
import Row from "react-bootstrap/Row";
import Link from "react-bootstrap/Row";
//import {BrowserRouter as Router, Switch, Route} from "react-bootstrap";
import InstruktorPocetna from '../instrukcija/instrukcija';
import Kurs from '../kurs/kurs';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
//import { Link } from 'react-bootstrap';

export default class Profil extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''};

      }

    
    render() {

    const onClick = () => {

          
    }
        return (
            <div className="Pocetna">
    <div id="lijeviDiv">
        <text className="tekst">Aktivne instrukcije</text>
        <div className="komponenta"><InstruktorPocetna></InstruktorPocetna></div>
        <div className="komponenta"><InstruktorPocetna></InstruktorPocetna></div>      
      
      <div className="komponenta"><InstruktorPocetna></InstruktorPocetna></div>
      <div className="komponenta"><InstruktorPocetna></InstruktorPocetna></div>      
    </div>
    <div id="desniDiv">
        <text className="tekst">Aktivni kursevi</text>
        <div className="komponenta"><Kurs
        ></Kurs></div>
        <div className="komponenta"><Kurs></Kurs></div>      
      
      <div className="komponenta"><Kurs></Kurs></div>
      <div className="komponenta"><Kurs></Kurs></div>      
    </div>
  </div>
        );
    }
}