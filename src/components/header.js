import React from 'react';
import { Link, graphql, useStaticQuery } from 'gatsby';

import headerStyles from './header.module.scss';

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
		<div>
			<header className={headerStyles.header}>
				<nav>
					<ul className={headerStyles.navList}>
						<li>
							<Link className={headerStyles.title} to="/">
								{data.site.siteMetadata.title}
							</Link>
						</li>
						<li>
							<Link
								className={headerStyles.navItem}
								activeClassName={headerStyles.activeNavItem}
								to="/blog"
							>
								Blog
							</Link>
						</li>
						<li>
							<Link
								className={headerStyles.navItem}
								activeClassName={headerStyles.activeNavItem}
								to="/about"
							>
								About
							</Link>
						</li>
					</ul>
				</nav>
			</header>
		</div>
	);
};

export default Header;
