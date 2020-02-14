import React from 'react';
import styled from 'styled-components';
import { Container } from '../styles/styledComponent';

const StyledPagetitle = styled.div`
	h1 {
		padding-top: 30vh;
		font-size: 6rem;
		line-height: 1;
		/* color: #ff8300;
		color: #560c84; */
		font-weight: 800;
	}

	p {
		font-size: 1.4rem;
		line-height: 1.5;
		font-weight: 300;
		padding-bottom: 3em;
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
