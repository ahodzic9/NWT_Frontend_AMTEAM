import React from 'react';
import styles from '../Pocetna/Pocetna.module.css';
import Row from "react-bootstrap/Row";
import Dobavljac from '../DobavljacPocetna/Dobavljac';


const Pocetna: React.FC = () => (
  <div className={styles.Pocetna}>
      <Row>
        <Dobavljac></Dobavljac>   
      </Row>
      <Row>
        <Dobavljac></Dobavljac>     
      </Row>
  </div>
);

export default Pocetna;
