import React from 'react';
import pagetitleStyles from './pagetitle.module.scss';

const Pagetitle = (props) => {
	return (
		<div className={pagetitleStyles.container}>
			<h1>{props.title}</h1>
			<p>{props.description}</p>
		</div>
	);
};

export default Pagetitle;
