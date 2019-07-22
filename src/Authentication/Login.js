import React from 'react';
import firebase from './Firebase';
import { Link } from "react-router-dom";
export default class Login extends React.Component {
    state = {
        email:'',
        password:'',
        error : null
    };
    handleInputChange = (event) =>{
        this.setState({[event.target.name]: event.target.value});
    };
    handleSubmit = (event) =>{
        event.preventDefault();
        console.log("login clicked");
        const { 
            email,
            password
        } = this.state;
        firebase.auth().signInWithEmailAndPassword(email,password).then(
            (user) =>{
                 console.log(user);
                this.props.history.push('/Home')
            }
        ).catch((error)=>{
            this.setState({error : error});
            console.log("USER NOT FOUND");
            alert("Invalid username or password");
        })
    }
    
	render() {
        const {
            email,
            password,
        }  = this.state;
		return (
            <>   
        <div>
        <h1>Login</h1>
       <form>
       <input 
            type="text" 
            name="email"
            placeholder="Email"
            value={email}
            onChange = {this.handleInputChange}
        />
        <span> </span>
        <br></br>
        
        <input 
            type="password"
            name="password"
            placeholder="Password"
            value={password}
            onChange={this.handleInputChange}
        />
        <span> </span>
        <br></br>
        <button type="button" className="btn btn-info" onClick={this.handleSubmit}>Log in</button>
        <br></br>
        <p>Don't have an account ?</p>
        <Link to="/Register"> Create one</Link>
       </form>
        </div>
        </>
    );}
}
