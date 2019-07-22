// import React from "react";
// export default class LoginForm extends React.Component{
//     constructor(props){
//         super();
//         this.state = {
//             identifier : "",
//             password : "",
//             errors : {},
//             isLoading : false
//         };
//         this.onSubmit = this.onSubmit.bind(this);
//         this.onChange = this.onChange.bind(this);
//     }
//     onSubmit(e){
//         e.preventDefault();
//     }
//     onChange(e){
//         this.setState({[e.target.name]: e.target.value});
//     }
//     render(){
//         const {errors,identifier,password,isLoading} = this.state;
//         return(
//         <form onSubmit={this.onSubmit}>
//         <h1>Login</h1>
//         <div className="form-group"><button className="btn btn-primary btn-lg" disabled={isLoading}>Login</button></div>
//         </form>
//         )
//     }
// }