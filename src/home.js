import React, { Component, useImperativeHandle } from "react";
import axios from 'axios';
import './home.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import ListGroup from"react-bootstrap/ListGroup";
import ListGroupItem from "react-bootstrap/ListGroupItem";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownMenu from "react-bootstrap/DropdownMenu";
import DropdownItem from "react-bootstrap/DropdownItem";

export default class Home extends Component {
  
    render() {
        

        return (
            <div id="pozadina">
                <nav className="navbar navbar-expand-md navbar-dark bg-dark fixed-top">
                    <div className="container">
                    <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                        <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <Link className="nav-link" to={"/home"}>Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to={"/pocetna"}>Instruktori</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to={"/profil"}>Profil</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to={"/chat"}>Chat</Link>
                        </li>
                        </ul>
                    </div>
                    </div>
                </nav>
                <div id="onlineUcenje">
                    <p id="faxtrukcije">Faxtrukcije</p>
                </div>
                <table id="tabela1">
                    <tr>
                        <td>
                            <p id="znanje">Znanje nikada nije skupo</p>
                            <p class="tekst">Nauči uz našu pomoć, uz veliki izbor instruktora koji znaju znanje!</p>
                        </td>
                        <td><img src="slika2.jpg" /></td>
                    </tr>
                    <tr>
                        <td><img id="slika1" src="slika1.jpg" /></td>
                        <td>
                            <p id="znanje">Dogovori online sesiju sa instruktorom</p>
                            <p class="tekst">Iskoristi mogućnost dopisivanja sa instruktorima i drugim studentima, stekni nove 
                            prijatelje i dogovaraj časove online.</p>
                        </td>
                        
                    </tr>
                </table>
                
                
            </div>
        );
    }
}