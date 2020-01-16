import React from 'react';
import Header from './header.js';
import Footer from './footer.js';
import '../styles/index.scss';
import styled from 'styled-components';

const StyledLayout = styled.div`
	background: #ffc107;
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
		<StyledLayout>
			<Header />
			<Content>{props.children}</Content>
			<Footer />
		</StyledLayout>
	);
};

export default Layout;
