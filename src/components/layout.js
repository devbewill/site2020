import React from 'react';
import Header from './header.js';
import Footer from './footer.js';
import '../styles/index.scss';
import styled from 'styled-components';

const StyledLayout = styled.div`
	background: #560c84;
	min-height: 100vh;
	/* * {
		transition: all 600ms ease-in-out;
	}

	*:hover {
		transform: scale(1.01);
	} */
`;

const Content = styled.div`
	padding-top: 30vh;
	margin: 0 auto;
	align-items: center;
	justify-content: center;
	max-width: 75vw;
	flex-grow: 1;
`;

const Layout = (props) => {
	return (
		<StyledLayout>
			<Header />
			<Content>{props.children}</Content>
			<Footer />
		</StyledLayout>
	);
};

export default Layout;
