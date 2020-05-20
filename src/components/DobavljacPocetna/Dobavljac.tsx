import React from 'react';
import  './Dobavljac.css';
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import "react-bootstrap";
import ListGroup from"react-bootstrap/ListGroup";
import ListGroupItem from "react-bootstrap/ListGroupItem";
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';


const InstruktorPocetna: React.FC = () => (
<div className="card">
  
  <div className="card-body">
    <div className="card-title">Dobavljac x</div>
  </div>
  
<table className="najveca_tabela">
  <tr>
    <td>
    <table className="lijeva_tabela">
    <tr>
          <td>Tip dobavljaca:</td>
          <td>prostorije</td>
    </tr>
    <tr> 
          <td>Ocjena:</td>
          <td>5</td>
    </tr>
    <tr>
          <td>Datum isteka ugovora:</td>
          <td>10.05.2020.</td>
    </tr>
  </table>
  </td>
  <td>
  
      <table id="tabela_dugmad">
          <tr><td><Button className="dugmad" variant="primary">Ugovor</Button></td></tr>
          <tr><td><Button className="dugmad" variant="primary">Ocijeni</Button></td></tr>
      </table>
  </td>
      </tr>
      </table>
      
 
</div>

  
);

export default InstruktorPocetna;
