import React from 'react';
import { Link, graphql, useStaticQuery } from 'gatsby';
import footerStyles from './footer.module.scss';

const Footer = () => {
	const data = useStaticQuery(graphql`
		query {
			site {
				siteMetadata {
					title
					author
				}
			}
		}
	`);

	return (
		<footer>
			{data.site.siteMetadata.title} - footer component - made in Milano by {data.site.siteMetadata.author}
		</footer>
	);
};

export default Footer;
