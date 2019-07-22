import React from "react";
import "./Header.css"
export default class Header extends React.Component {
    render(){
        return(
            <div className="header">
                <h1 className="choco">Chocolate</h1>
                <h5>
                    is the answer, who cares what the question is !!!
                </h5>
            </div>
        )
    }
}