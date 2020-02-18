import React from 'react';
import Header from './header.js';
import Footer from './footer.js';
import '../styles/index.scss';
import '../styles/default.scss';
import styled from 'styled-components';
import letterbg from '../images/letter_S.svg';

const StyledLayout = styled.div`
	/* background: #fafafa url(${letterbg}) no-repeat top right;
	background-position: fixed;
	background-size: auto 120vh;
	mask-size: 100vh;
	mask-repeat: no-repeat;
	mask-position: right; 
	background: #560c84; */
	min-height: 100vh;
`;

const Layout = (props) => {
	return (
		<StyledLayout>
			<Header />
			{props.children}
			<Footer />
		</StyledLayout>
	);
};

export default Layout;
