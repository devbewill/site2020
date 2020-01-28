import React from 'react';
import Header from './header.js';
import Footer from './footer.js';
import '../styles/index.scss';
import styled from 'styled-components';
import letterbg from '../images/letter_S.svg';

const StyledLayout = styled.div`
	background: #fafafa url(${letterbg}) no-repeat top right;
	background: #fafafa;
	background-position: fixed;
	background-size: auto 120vh;
	/* mask-size: 100vh;
	mask-repeat: no-repeat;
	mask-position: right; */
	/* background: #560c84; */
	min-height: 100vh;
	color: #222;

	/* * {
		transition: all 600ms ease-in-out;
	}

	*:hover {
		transform: scale(1.01);
	} */

	p {
		color: #000;
	}
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
