import React from 'react';
import  './kurs.css';
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import ListGroup from"react-bootstrap/ListGroup";
import ListGroupItem from "react-bootstrap/ListGroupItem";


const kurs: React.FC = () => (
<Card style={{ width: '95%' }}>
  <Card.Img variant="top" src="../public/profile.jpg" />
  <Card.Body>
    <Card.Title>Kurs xy</Card.Title>
    <Card.Text>
      Kurs iz oblasti: matematika
    </Card.Text>
    <Card.Text>
      Vrijeme i datum trajanja kursa
    </Card.Text>
    <Card.Text>
      Ime i prezime instruktora
    </Card.Text>
  </Card.Body>
  <ListGroup className="list-group-flush">
    <ListGroupItem>Ucesnik1</ListGroupItem>
    <ListGroupItem>Ucesnik2</ListGroupItem>
    <ListGroupItem>Ucesnik3</ListGroupItem>
  </ListGroup>
  <Card.Body>
    <Button variant="primary">Otvori profil instruktora</Button>
  </Card.Body>
</Card>
  
);

export default kurs;
