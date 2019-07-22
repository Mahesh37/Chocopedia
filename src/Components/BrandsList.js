import React from "react";
import { connect } from "react-redux";
import { getBrands } from "../actionCreator/postsAC";
import BrandListItem from "./BrandListItem";

const divStyle={
    width: '80%',
    display: 'flex',
    width: "500px",
    height: "170px",
    marginleft: "25%"
 
}
class BrandList extends React.Component{
   componentDidMount(){
        this.props.dispatch(getBrands());
   }
   
    render(){
    return(
       <>
            <h1>BRANDS LIST</h1>
           {this.props.isLoading && <p>Please wait...</p>}
            {/* {this.props.brands.map(p => (
                <li key = {p.id}>
                <Link to={`/brands/${this.props.desc}`}>
                {p.name}
                </Link>
                 <div>
                     {<img src={p.logo} />}
                 </div>
                </li>
            ))} */}
            <div  style={divStyle}>
            {
                this.props.brands.map( b => (
                    <BrandListItem 
                        key={b.id}
                        id = {b.id}
                        name = {b.name}
                        logo = {b.logo}
                        desc = {b.desc}  
                    />
                ))
            }
            </div>
        </>
    );
}
}
function mapStateToProps(state){
    console.log(state)
    return {
        brands : state.brands,
        isLoading: state.isLoading
    };
}

export default connect(mapStateToProps)(BrandList);