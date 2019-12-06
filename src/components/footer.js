import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
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
		<footer className={footerStyles.footer}>
			{data.site.siteMetadata.title} - footer component - made in Milano by {data.site.siteMetadata.author}
		</footer>
	);
};

export default Footer;
