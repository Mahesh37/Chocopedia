import React from "react";
import { connect } from "react-redux";
import { getChocolates } from "../actionCreator/postsAC"
import ChocolateListItem from "./chocolateListItem";

class ChocolateList extends React.Component{
   componentDidMount(){
        this.props.dispatch(getChocolates());
   }
    render(){
    return(
       <>
            <h1>Chocolate List</h1>
           {this.props.isLoading && <p>Please wait...</p>}
            {
                this.props.chocolates.map( b => (
                    <ChocolateListItem 
                        key={b.id}
                        id = {b.id}
                        name = {b.name}
                        image = {b.image}
                        desc = {b.desc}  
                    />
                ))
            }
        </>
    );
}
}
function mapStateToProps(state){
    return {
        chocolates : state.chocolates,
        isLoading: state.isLoading
    };
}

export default connect(mapStateToProps)(ChocolateList);