import React from "react";
// import { Link } from "react-router-dom";
// import { NavLink } from "react-router-dom";
import { NavLink } from "react-router-dom";
import {connect} from "react-redux";
import { searchChocolate, change_input } from "../actionCreator/postsAC"
import firebase from "../Authentication/Firebase";
import { Redirect } from "react-router-dom"

import "./NavBar.css";
import { Navbar, Nav, Form, FormControl, Button} from "react-bootstrap";
export let search;
class NavBar extends React.Component{
    state ={
        searchText  : "",
        error : null,
    } 
    handleInputChange = (searchEvent) =>{
        console.log("searchEvent.target.value",searchEvent.target.value)
        this.setState({searchText: searchEvent.target.value})
           
    }
    handleChange =  () =>{
        let search=this.state.searchText
        this.props.dispatch(change_input("search",search));
        console.log(this.state.searchText);  
        this.props.dispatch(searchChocolate(search));
        console.log("HandleChange",this.props.search)
    };
    // handleLogout = () =>{
    //     firebase.auth.signOut().then( (user) =>{
    //         alert("Logged out")
    //     })
    // };
    render(){
    return(
        <>
        <Navbar bg="maroon" id="NavBar">
            <Navbar.Brand id="brandText">Chocolate Collection</Navbar.Brand>
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                <Nav.Link  className ="homeText"><NavLink to="/home" exact>Home</NavLink></Nav.Link>
                <Nav.Link> <NavLink to="/brands"  exact>Brands</NavLink></Nav.Link>
                <Nav.Link><NavLink to="/chocolates" exact>Chocolates</NavLink></Nav.Link>
                </Nav>
            </Navbar.Collapse>
            <Form inline id="searchFrom" onSubmit={()=>this.handleChange()}>
                <Button variant="outline-success"><NavLink to="/login" exact>Login</NavLink></Button>
                <span>" "</span>
                <Button variant="outline-success" 
                onClick={()=>{
                 firebase.auth().signOut().then((user)=> {
                    //this.setState({items:null})
                    })
                }}><NavLink to="/login" exact>Logout</NavLink>
                </Button>
                <span> " "</span>
                <FormControl type="text" placeholder="Search Chocolates" className="mr-sm-2" onChange = {this.handleInputChange} />
                <Button variant="outline-success"  onClick = {()=>this.handleChange()} ><NavLink to="/SearchChocolates" exact>Search</NavLink></Button>
            </Form>
        </Navbar>
        <div>
            
        </div>
       </>
    ) }
}

function mapStateToProps(state){
    console.log("NavBAr",state.search);
    return{
       search : state.search
    }
}

export default connect(mapStateToProps)(NavBar);