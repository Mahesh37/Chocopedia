import React from "react";
// import { Link } from "react-router-dom";
// import { NavLink } from "react-router-dom";
import { NavLink,Route,Switch} from "react-router-dom";
import {connect} from "react-redux";
import { searchChocolate, change_input } from "../actionCreator/postsAC"
import firebase from "../Authentication/Firebase";
import "./NavBar.css";
import { Navbar, Nav, Form, FormControl, Button} from "react-bootstrap";
import Home from "../Home/Home";
import Login from "../Authentication/Login";
import HomeBeforeLogin from "../Home/HomeBeforeLogin";
export let search;
class Navigation extends React.Component{
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
                
                {
                 this.props.authenticated ? (
                   <>
                   <span>
                   <Nav.Link  className ="homeText"><NavLink to="/Home" exact>Home</NavLink></Nav.Link>
                   </span>
                   <span>
                   <Nav.Link> <NavLink to="/brands"  exact>Brands</NavLink></Nav.Link>
                   </span>
                   <span>
                   <Nav.Link> <NavLink to="/chocolates"  exact>Chocolates</NavLink></Nav.Link>
                   </span>
                   </>
                    ) : (
                        <>
                        <span>
                        <Nav.Link  className ="homeText"><NavLink to="/homeLogin" exact>Home</NavLink></Nav.Link>
                        </span>
                        <span>
                        <Nav.Link><NavLink to="/login">Login</NavLink></Nav.Link>
                        </span>
                        </>
                    )
                }
                </Nav>
            </Navbar.Collapse>
            <Switch>
                <Route exact path="/homeLogin" Component={HomeBeforeLogin} />
                <Route exact path="/login" Component = {Login}/>
            </Switch>
            <Form inline id="searchFrom" onSubmit={()=>this.handleChange()}>
                <Button variant="outline-success"><NavLink to="/login" exact>Login</NavLink></Button>
                <span>" "</span>
                <Button variant="outline-success" 
                onClick={()=>{
                 firebase.auth().signOut().then((user)=> {
                     console.log("Logout clicked")
                    //this.setState({items:null})
                    alert("Logged out")
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

export default connect(mapStateToProps)(Navigation);