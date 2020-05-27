import React, { Component, useImperativeHandle } from "react";
import axios from 'axios';
import './instruktor.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import ListGroup from"react-bootstrap/ListGroup";
import ListGroupItem from "react-bootstrap/ListGroupItem";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownMenu from "react-bootstrap/DropdownMenu";
import DropdownItem from "react-bootstrap/DropdownItem";

export default class Instruktor extends Component {
    constructor(props) {
        super();
        this.state = {
            token : localStorage.getItem('token'),
            id:'',
            firstName:'',
            lastName:'',
            avgGrade:1,
            description:'',
            registrationDate:'',
            numberOfScheduledInstructions:0,
            subjects : null,
            grades : null
        };
        this.createGradeList = this.createGradeList.bind(this);
      }

    
    onClick = event => {
       
          
    }
    componentDidMount(){
        this.setState({firstName:this.props.firstName});
        this.setState({lastName:this.props.lastName});
        this.setState({id:this.props.id});
        this.setState({avgGrade:this.props.avgGrade});
        this.setState({description:this.props.description});
        this.setState({registrationDate:this.props.registrationDate});
        this.setState({numberOfScheduledInstructions:this.props.numberOfScheduledInstructions});
        this.setState({subjects:this.props.subjects});

        
        axios.get('http://localhost:8111/api/rating/grades-instructor-all/'+this.props.id,{
            headers: {
              Authorization: this.state.token 
            }}).then(res => {
            this.setState({grades : res.data})

          }).catch( error =>{
              
          }
        );
    }
    createSubjectList(item){
        return <ListGroupItem key={item.id}>{item.name}: {item.description}
            </ListGroupItem>
    }
    createGradeList(item){
        return <Dropdown.Item key={item.id} href="#">
            Ocjena: {item.grade},    Komentar: {item.comment}
            </Dropdown.Item>
    }
    
    render() {
        if(this.state.subjects != null)
            var SL = this.state.subjects.map(this.createSubjectList);
        if(this.state.grades != null)
            var GL = this.state.grades.map(this.createGradeList);

        const onClick = () => {
            
        }

        return (
            <Card id="instruktorKartica" style={{ width: '80%' }}>
                <table class="datumOcjena">
                    <tr>
                        <td><Card.Img class="profilnaSlika" variant="top" src="profile.jpg" /></td>
                        <td><Card.Body id="instruktorInfo">
                            <Card.Title id="naslov">{this.state.firstName} {this.state.lastName}</Card.Title>
                            <Card.Text id="asda">{this.state.description}</Card.Text>
                            <Card.Text>Datum prijave: {this.state.registrationDate}</Card.Text>
                            </Card.Body>
                        </td>
                        <td>
                            <table>
                                <tr id="ocjena">{this.state.avgGrade}</tr>
                                <tr><Card.Text>Prosječna ocjena</Card.Text></tr>
                            </table>
                        </td>
                    </tr>
                </table>
                
                    <ListGroup className="list-group-flush">
                        {SL}
                    </ListGroup>
                    <table>
                        <tr>
                            <td>
                                <Dropdown class="ocjene">
                                    <Dropdown.Toggle variant="info" id="dropdown-basic">
                                        Prikaži sve ocjene instruktora
                                    </Dropdown.Toggle>

                                    <Dropdown.Menu class="ocjene">
                                        {GL}
                                    </Dropdown.Menu>
                                </Dropdown>
                            </td>
                            <td>
                                <Card.Body>
                                    <Button variant="primary">Zakaži instrukciju</Button>
                                </Card.Body>
                            </td>
                            
                        </tr>
                    </table>
                    
                
            </Card>
        );
    }
}