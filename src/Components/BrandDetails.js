import React from 'react';
import { connect } from 'react-redux'; 
import { getBrandsById} from '../actionCreator/postsAC';


class BrandDetails extends React.Component {
	componentDidMount() {
        console.log(this.props)
		this.props.dispatch(getBrandsById(this.props.match.params.id));
    }
    render(){
        return(
            <>
                <h2>Brand Details</h2>
				<button onClick={this.props.history.goBack}>Back</button>
                {
					this.props.brands.length>0 && this.props.brands.map ( b => (
					<li >
						{b.name}
						<div>{<img src={b.image} alt="" />}</div>
                        {b.desc}
                    </li>
					))
                        
                }
            </>
        );
    }
}


function mapStateToProps(state) {
	return {
		brands: state.id_brands
	};
}
export default connect(mapStateToProps)(BrandDetails);
