import React from 'react';
import styled from 'styled-components';
import { Container } from '../styles/styledComponent';

const StyledPagetitle = styled.div`
	h1 {
		padding-top: 30vh;
		font-size: 4rem;
		line-height: 1;
		font-weight: 800;
	}

	p {
		font-size: 1.2rem;
		line-height: 1.5;
		font-weight: 300;
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
