import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

const Navbar = styled.header`
	width: 100%;
	position: fixed;
	display: flex;
	padding: 1em;
	top: 0;
	@media only screen and (max-width: 600px) {
		padding: 1rem 0;
	}
`;

const NavList = styled.ul`
	width: 100%;
	justify-content: flex-end;
	list-style-type: none;
	display: flex;
	margin: 0;

	li {
		margin: 0;
	}

	li:first-child {
		flex: auto;

		a {
			color: ${(props) => props.theme.colors.primary};
			font-family: -apple-system, BlinkMacSystemFont, sans-serif;
			font-weight: 900;
			letter-spacing: -2px;
			font-size: 1.5rem;
			display: inline-block;
			margin-lefT: 0.7rem;

			&.active {
				padding-bottom: 0;
				border-bottom: none;
			}
		}
	}

	a {
		text-decoration: none;
		font-size: 0.6rem;
		margin: 0 0.7rem 0 0;
		color: #222;
		font-weight: 700;
		text-transform: uppercase;

		&.active {
			border-bottom: 3px solid ${(props) => props.theme.colors.primary};
		}
	}

	@media only screen and (max-width: 600px) {
		a {
			font-size: 0.8rem;
		}
	}
`;

const Header = () => {
	return (
		<Navbar>
			<NavList>
				<li>
					<Link to="/" activeClassName="active">
						SP
					</Link>
				</li>
				{/* <li>
					<Link to="/about" activeClassName="active">
						About
					</Link>
				</li> */}
				{/* <li>
					<Link to="/portfolio" activeClassName="active">
						works
					</Link>
				</li> */}
				{/* <li>
					<Link to="/blog" activeClassName="active">
						words
					</Link>
				</li> */}
			</NavList>
		</Navbar>
	);
};

export default Header;
