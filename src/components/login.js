import React, { Component, useImperativeHandle } from "react";
import { useHistory } from 'react-router-dom';
import SignUp from "../components/signup.js";
import  './login.css';
import axios from 'axios';

export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''};

        this.handleChangeUsername = this.handleChangeUsername.bind(this);
        this.handleChangePassword = this.handleChangePassword.bind(this);
        //this.handleSubmit = this.handleSubmit.bind(this);
      }

    handleChangeUsername(event) {
        this.setState({username: event.target.value});
    }
    handleChangePassword(event) {
        this.setState({password: event.target.value});
    }
    render() {

    const onClick = () => {

        axios.post('http://localhost:8111/api/management/login', {
            "userName": this.state.username,
	"password": this.state.password
          })
          .then(function (response) {
              //alert(response.status);
            if(response.status == 200){
                window.location.replace("/poc");
            }
          })
          .catch(function (error) {
              //alert(error);
            document.getElementById("pogresni_podaci").style.display = 'block';
          });
          
    }
        return (
            <div id="loginDiv">
            <form>
                <h3>Sign In</h3>

                <div className="form-group">
                    <label>Username</label>
                    <input id = "username" onChange={this.handleChangeUsername} type="username" className="form-control" placeholder="Enter username" />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input  id = "password" onChange={this.handleChangePassword} type="password" className="form-control" placeholder="Enter password" />
                </div>
                <label id="pogresni_podaci" style={{display:"none", color:"red"}}>Pogresni korisnički podaci, pokušajte ponovo!</label>
                

                <button type="button" className="btn btn-primary btn-block" onClick = {()=>onClick()}>Submit</button>
                
            </form>
            </div>
        );
    }
}