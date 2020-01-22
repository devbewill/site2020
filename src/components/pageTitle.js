import React from 'react';
import styled from 'styled-components';

const StyledPagetitle = styled.div`
	h1 {
		font-size: 8rem;
		white-space: pre;
		line-height: 1;
		color: #ff8300;
	}

	p {
		font-size: 1.2rem;
		max-width: 750px;
		font-weight: 300;
		line-height: 1.5;
	}
`;

const Pagetitle = (props) => {
	return (
		<StyledPagetitle>
			<h1>{props.title}</h1>
			<p>{props.description}</p>
		</StyledPagetitle>
	);
};

export default Pagetitle;
