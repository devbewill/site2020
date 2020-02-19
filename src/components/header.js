import React from 'react';
import { Link, graphql, useStaticQuery } from 'gatsby';
import styled from 'styled-components';

const Navbar = styled.header`
	width: 100%;
	position: fixed;
	display: flex;
	padding: 2rem 1em 1rem;
	top: 0;
	@media only screen and (max-width: 600px) {
		padding: 2rem 0 1rem;
	}
`;

const NavList = styled.ul`
	width: 100%;
	justify-content: flex-end;
	list-style-type: none;
	display: flex;
	margin: 0;

	li:first-child {
		flex: auto;

		a {
			color: #fe003f;
			font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans,
				Droid Sans, Helvetica Neue, sans-serif;
			font-weight: 900;
			letter-spacing: -3px;
			font-size: 2rem;
			display: inline-block;
			/* transform: rotate(90deg);
			transform-origin: left top 0; */
			/* animation: rotating 5s linear infinite; */

			&.active {
				padding-bottom: 0;
				border-bottom: none;
			}
		}
	}

	a {
		text-decoration: none;
		margin: 0 1rem;
		color: #222;
		font-weight: 300;
		&.active {
			padding-bottom: 0.1rem;
			border-bottom: 1px solid #fff;
		}
	}

	@keyframes rotating {
		from {
			transform: rotate(0deg);
		}
		to {
			transform: rotate(360deg);
		}
	}
`;

const Header = () => {
	const data = useStaticQuery(graphql`
		query {
			site {
				siteMetadata {
					title
				}
			}
		}
	`);
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
				<li>
					<Link to="/portfolio" activeClassName="active">
						works
					</Link>
				</li>
				<li>
					<Link to="/blog" activeClassName="active">
						words
					</Link>
				</li>
			</NavList>
		</Navbar>
	);
};

export default Header;
