import React from 'react';
import pageTitleStyles from './pageTitle.module.scss';
import { checkPropTypes } from 'prop-types';

const PageTitle = (props) => {
	return <div>{props.children}</div>;
};

export default PageTitle;
