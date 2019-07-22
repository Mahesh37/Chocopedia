import React, { Component } from 'react';
import { withRouter,Link } from 'react-router-dom';
import firebase from '../Authentication/Firebase';

class Register extends Component {
	state = {
		email: '',
		password: '',
		error: null
	};

	handleInputChange = (event) => {
		this.setState({ [event.target.name]: event.target.value });
		
	};
	handleSubmit = (event) => {
		const { email, password } = this.state;
		console.log("submit clicked");
		console.log("email",email)
		console.log("password",password);
		firebase.auth().createUserWithEmailAndPassword(email, password)
      .then((user) => {
		console.log("created");
		// alert("New Account is created")
      })
      .catch((error) => {
		this.setState({ error: error });
		console.log("Not created");
	  });
	};
	render() {
		const { email, password} = this.state;
		return (
				<form  onSubmit={this.handleSubmit} >
					
					<label>First Name : </label>
					<input 
						type="text"
						name="First Name"
						id="firstname"
					/>		
					<br></br>
					<label>Last Name : </label>
					<input 
						type="text"
						name="Last Name"
					/>
					<br></br>
					<label>Email : </label>
					<span>    </span>
					<input
						type="text"
						name="email"
						placeholder="Email"
						value={email}
						onChange={this.handleInputChange}
					/>
					<br></br>
					<label>Password : </label>
					<input
						type="password"
						name="password"
						placeholder="Password"
						value={password}
						onChange={this.handleInputChange}
					/>
					<br></br>
				<input 
					className="btn btn-info"
					type="submit"
					name="submit"
					onClick={this.handleSubmit}
				/>
			</form>
		);
	}
}

export default Register;
