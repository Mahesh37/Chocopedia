import React from "react";
import {Link} from "react-router-dom";
import './Home.css'
export default class HomeBeforeLogin extends React.Component{
    render(){
        return(
        <>
        <div className="homeDiv">
        <div>
            <h2>
                Chocolate Collection is a crowd sourced portal
                which gives you details about world renowed brands and Chocolates
            </h2>
        </div>
        <div>
            <h5>Please  
                <Link to="/login"> LogIn/</Link>
                <Link to="/Register">SignUp</Link>
                , to contribute , Happy Chocolating 
            </h5>
        </div>
        </div>
        </>
        )
    }
}