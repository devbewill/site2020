import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import styled from 'styled-components';

const StyledFooter = styled.footer`padding: 1rem;`;

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
		<StyledFooter>
			{data.site.siteMetadata.title} - footer component - made in Milano by {data.site.siteMetadata.author}
		</StyledFooter>
	);
};

export default Footer;
