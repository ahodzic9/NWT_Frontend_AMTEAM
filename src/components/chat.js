import React, { Component, useImperativeHandle } from "react";
import axios from 'axios';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
export default class Chat extends Component {
    constructor(props) {
        super(props);
        this.state = {
            listMessage : "List is empty",
            chatMessage : "No client selected",
            token : localStorage.getItem('token'),
            listOfClients : null,
            listOfClientsNull : true,
            selectedClient : null,
            isClientSelected: false
        };
        this.onClickClient = this.onClickClient.bind(this);
    }
    componentDidMount(){
        axios.get('http://localhost:8111/api/management/clients',{
            headers: {
              Authorization: this.state.token 
            }}).then(res => {
            console.log(res);
            console.log(res.data);
            this.setState({listMessage : "List of all clients: ",
                            listOfClients : res.data})
                            
        this.setState({listOfClientsNull : false})
          }).catch( error =>{
              alert(error);
          }
        )
    }
    onClickClient(){
        console.log("Clicked on: "/*+item.id+" with name "+item.firstName*/);
    
        /*axios.get('http://localhost:8111/api/management/clients',{
            headers: {
              Authorization: this.state.token 
            }}).then(res => {
            console.log(res);
            console.log(res.data);
            this.setState({listMessage : "List of all clients: ",
                            listOfClients : res.data})
                            
        this.setState({listOfClientsNull : false})
          }).catch( error =>{
              alert(error);
          }
        )*/
    };
    
    createClientList(item){
        return <li onClick={()=>{alert("Selected user is: " + item.firstName)}} key={item.id}>{item.firstName}</li>
    }
    render() {
        if(!this.state.listOfClientsNull)
        var CL = this.state.listOfClients.map(this.createClientList);
        return (
            <div><nav className="navbar navbar-expand-md navbar-dark bg-dark fixed-top">
            <div className="container">
              <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                <ul className="navbar-nav mr-auto">
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
        <div id="chatRoom">
            <div id="list" style={{'float':'left', 'width':"20%"}}>
        <p id="defaultMessageList" style={{'marginTop':'20px'}}>{this.state.listMessage}</p>
        {this.state.listOfClientsNull ? null :
        <ul>{CL}</ul>}
            </div>
            <div id="chat" style={{'float':'right', 'width':"70%"}}>
                {!this.state.isClientSelected ? <p id="defaultMessageChat" style={{'marginTop':'20px'}}>{this.state.chatMessage}</p>
                : <div>
                    <p>Chat with {this.state.selectedClient.firstName}</p>    
                </div>}
            </div>
        </div>
        </div>
        );
    }
}