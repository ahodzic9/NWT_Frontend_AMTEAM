import React from 'react';
import styles from './InstruktorPocetna.module.css';
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import ListGroup from"react-bootstrap/ListGroup";
import ListGroupItem from "react-bootstrap/ListGroupItem";


const InstruktorPocetna: React.FC = () => (
<Card style={{ width: '80%' }}>
  <Card.Img variant="top" src="../public/profile.jpg" />
  <Card.Body>
    <Card.Title>Instruktor 1</Card.Title>
    <Card.Text>
      Ja sam instruktor matematike i super sam.
    </Card.Text>
  </Card.Body>
  <ListGroup className="list-group-flush">
    <ListGroupItem>Predmet1</ListGroupItem>
    <ListGroupItem>Predmet2</ListGroupItem>
    <ListGroupItem>Predmet3</ListGroupItem>
  </ListGroup>
  <Card.Body>
    <Button variant="primary">Otvori profil</Button>
  </Card.Body>
</Card>
  
);

export default InstruktorPocetna;
