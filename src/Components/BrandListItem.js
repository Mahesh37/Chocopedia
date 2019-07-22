import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default function BrandListItem(props) {
	return (
		<div className="item">
			<h2>
				<Link to={`/brands/${props.id}`}>{props.name}</Link>
			</h2>
			<div>{<img src={props.logo} width="200" height="80"alt="" />}</div>
		</div>
	);
}

BrandListItem.propTypes = {
	name: PropTypes.string.isRequired,
	id: PropTypes.string.isRequired,
	logo: PropTypes.string.isRequired,
	desc: PropTypes.string.isRequired
};
