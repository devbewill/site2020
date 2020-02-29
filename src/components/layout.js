import React from 'react';
import Header from './header.js';
import Footer from './footer.js';
import '../styles/index.scss';
import styled from 'styled-components';

const StyledLayout = styled.div`
	h1 {
		font-family: 'Oswald', sans-serif;
		font-size: 4rem;
		margin: 0;
		font-weight: 900;
		text-transform: uppercase;
		letter-spacing: -5px;
		line-height: 0.9;
	}

	h2 {
		font-size: 3rem;
		letter-spacing: -2px;
		font-weight: 800;
		padding: 0;

		span {
			color: ${(props) => props.theme.colors.primary};
		}
	}

	p {
		font-size: 1rem;
		line-height: 1.4;
		font-weight: 300;
	}

	.align-right {
		text-align: right;
	}

	@media only screen and (max-width: 600px) {
		h1 {
			font-size: 5rem;
		}

		h2 {
			font-size: 3rem;
			padding: 0;
		}

		p {
			font-size: 1.1rem;
		}

		.cycle {
			display: none;
		}
	}

	.knowhow,
	.toolkit {
		p {
			column-count: 2;
			column-gap: 4em;
			@media only screen and (max-width: 600px) {
				column-count: auto;
			}
		}
		p span {
			font-family: 'Oswald';
			display: inline-block;
			font-weight: 400;
		}
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
