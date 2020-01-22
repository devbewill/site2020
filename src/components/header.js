import React from 'react';
import { Link, graphql, useStaticQuery } from 'gatsby';
import styled from 'styled-components';

const Navbar = styled.header`
	width: 100%;
	position: fixed;
	display: flex;
	padding: 4rem 2rem 2rem;
	top: 0;
`;

const NavList = styled.ul`
	width: 100%;
	justify-content: flex-end;
	list-style-type: none;
	display: flex;
	margin: 0;

	li:first-child {
		font-weight: 800;
		flex: auto;

		a {
			font-weight: 800;

			&.active {
				padding-bottom: 0;
				border-bottom: none;
			}
		}
	}

	a {
		text-decoration: none;
		margin: 0 1rem;
		color: #fff;
		font-weight: 300;
		&.active {
			padding-bottom: 0.1rem;
			border-bottom: 1px solid #fff;
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
						{data.site.siteMetadata.title}
					</Link>
				</li>
				<li>
					<Link to="/about" activeClassName="active">
						About
					</Link>
				</li>
				<li>
					<Link to="/portfolio" activeClassName="active">
						Portfolio
					</Link>
				</li>
				<li>
					<Link to="/blog" activeClassName="active">
						Blog
					</Link>
				</li>
			</NavList>
		</Navbar>
	);
};

export default Header;
