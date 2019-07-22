import React from 'react';
import { connect } from 'react-redux';
import { getChocolatesById } from '../actionCreator/postsAC';

// let ChocolateDetails = (props) =>{
//     let chocolate = props.chocolates.filter((data) => {
// 		return data.id == props.match.params.id;
//     });

//     return(
//         <div>
//             <p>Details - {chocolate[0].desc}</p>
//             <button onClick={props.history.goBack}>Back</button>
//         </div>
//     );
// };
class ChocolateDetails extends React.Component {
	componentDidMount() {
		this.props.dispatch(getChocolatesById(this.props.match.params.id));
    }
    render(){
        return(
            <>
                <h2>Chocolate Details</h2>
                {
                        <li key={this.props.chocolates.id}>
                            {this.props.chocolates.desc}
                        </li>
                }
                <button onClick={this.props.history.goBack}>Back</button>
            </>
        );
    }
}

function mapStateToProps(state) {
    console.log(state)
	return {
		chocolates: state.id_chocolate
	};
}
export default connect(mapStateToProps)(ChocolateDetails);
