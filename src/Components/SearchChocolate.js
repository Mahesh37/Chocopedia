import React, { Component } from "react";
import { connect } from "react-redux";
import {searchChocolate, searchChocolateSuccess} from "../actionCreator/postsAC";
class SearchChocolate extends React.Component{
    componentDidMount() {
        this.props.dispatch(searchChocolate());
    }
    render(){
        let ChocoArr;
        let ChocoNoResults;
        let ChocoData = this.props.chocolates;
        let searchWord = this.props.search;
        console.log("ChocolatesSearch",ChocoData);
        console.log("Search word",searchWord )
        if(ChocoData[0]!==undefined){
        ChocoArr = ChocoData.filter(c =>
            { return c.name.toLowerCase().includes(searchWord)})
            console.log("searched data",ChocoArr.length)
        }
        return(
            <>
                <h2>Search Results</h2>
               {
                   ChocoArr!==undefined && <>
                       {/* {ChocoArr[0].name} */}
                       {
                           ChocoArr.map( c =>(
                               <li>
                                    {c.name}
                                    <div>{<img src={c.image} alt="" />}</div>
                        
                               </li>
                           ))
                       }
                   </>
               }
            </>
        );
    }
}
function mapStateToProps(state){
    return{
        search: state.search,
        chocolates : state.searchChocolate

    }
}

export default connect(mapStateToProps)(SearchChocolate);

//const ChocoArr = this.props.chocolates.filter(c=>{return c.toLowerCase().includes(this.props.search)})