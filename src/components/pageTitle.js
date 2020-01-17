import React from 'react';
import styled from 'styled-components';

const StyledPagetitle = styled.div`
	h1 {
		font-size: 10vw;
		white-space: pre;
	}

	p {
		max-width: 1000px;
		font-size: 1.8rem;
		line-height: 1.3;
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
