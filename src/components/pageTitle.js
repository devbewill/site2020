import React from 'react';
import pageTitleStyles from './pageTitle.module.scss';

const PageTitle = (props) => {
	return (
		<div className={pageTitleStyles.container}>
			<h1>{props.title}</h1>
			<p>{props.description}</p>
		</div>
	);
};

export default PageTitle;
