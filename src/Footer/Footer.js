import React from "react";
import "./Footer.css";
export default class Footer extends React.Component{
    render(){
        return(
            <>
               <div className="mainDiv">
               <footer className="page-footer font-small teal pt-4">
                <div className="container-fluid text-center text-md-left">
                <div className="row">
                <div className="col-md-3 mx-auto">
                <h5 className="font-weight-bold text-uppercase mt-3 mb-4">Social</h5>
                <ul className="list-unstyled">
                <li>
                <a href="#!">Twitter</a>
                </li>
                <li>
                <a href="#!">Instagram</a>
                </li>
                <li>
                <a href="#!">Facebook</a>
                </li>
                </ul>
                </div>
                
                <div className="col-md-3 mx-auto">
                <h5 className="font-weight-bold text-uppercase mt-3 mb-4">Social</h5>
                <ul className="list-unstyled">
                <li>
                <a href="#!">Twitter</a>
                </li>
                <li>
                <a href="#!">Instagram</a>
                </li>
                <li>
                <a href="#!">Facebook</a>
                </li>
                </ul>
                </div>

                <div className="col-md-3 mx-auto">
                <h5 className="font-weight-bold text-uppercase mt-3 mb-4">Social</h5>
                <ul className="list-unstyled">
                <li>
                <a href="#!">Twitter</a>
                </li>
                <li>
                <a href="#!">Instagram</a>
                </li>
                <li>
                <a href="#!">Facebook</a>
                </li>
                </ul>
                </div>
                
                </div>
                </div>
               </footer>
               </div>
            </>
        )
    }
}