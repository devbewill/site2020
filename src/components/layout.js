import React from 'react';
import Header from './header.js';
import Footer from './footer.js';
import '../styles/index.scss';
import styled from 'styled-components';

const Container = styled.div`
	background: #ffc107;
	background: #fff;
	display: flex;
	flex-direction: column;
	min-height: 100vh;
`;

const Content = styled.div`
	padding: 2rem;
	justify-content: flex-start;
	flex-grow: 1;
`;

const Layout = (props) => {
	return (
		<Container>
			<Header />
			<Content>{props.children}</Content>
			<Footer />
		</Container>
	);
};

export default Layout;
