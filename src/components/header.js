import React from 'react';
import { Link, graphql, useStaticQuery } from 'gatsby';
import styled from 'styled-components';

const Navbar = styled.header`
	display: flex;
	padding: 2rem;
`;

const NavList = styled.ul`
	list-style-type: none;
	display: flex;
	margin: 0;

	li:first-child {
		font-weight: 800;
	}

	a {
		text-decoration: none;
		margin-right: 2.5rem;
		color: #222;
		&.active {
			padding-bottom: 0.3rem;
			border-bottom: 1px solid #222;
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
					<Link to="/blog" activeClassName="active">
						Blog
					</Link>
				</li>
				<li>
					<Link to="/about" activeClassName="active">
						About
					</Link>
				</li>
			</NavList>
		</Navbar>
	);
};

export default Header;
