import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default function ChocolateListItem(props) {
	return (
		<div className="item">
			<h2>
				<Link to={`/chocolates/${props.id}`}>{props.name}</Link>
				{/* onclick()={
					history.push('/chocolates/${id}')
				} */}
			</h2>
			<div>{<img src={props.image} alt="" />}</div>
		</div>
	);
}

ChocolateListItem.propTypes = {
	name: PropTypes.string.isRequired,
	id: PropTypes.string.isRequired,
	image: PropTypes.string.isRequired,
	desc: PropTypes.string.isRequired
};
