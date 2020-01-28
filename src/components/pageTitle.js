import React from 'react';
import styled from 'styled-components';
import { Container } from '../styles/styledComponent';

const StyledPagetitle = styled.div`
	h1 {
		padding-top: 35vh;
		font-size: 8rem;
		line-height: 1;
		/* color: #ff8300;
		color: #560c84; */
		font-weight: 800;
	}

	p {
		font-size: 2rem;
		font-weight: 300;
		line-height: 1.5;
	}
`;

const Pagetitle = (props) => {
	return (
		<Container>
			<StyledPagetitle>
				<h1>{props.title}</h1>
				<p>{props.description}</p>
			</StyledPagetitle>
		</Container>
	);
};

export default Pagetitle;
