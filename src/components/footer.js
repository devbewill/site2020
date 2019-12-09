import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import styled from 'styled-components';

const FooterStyled = styled.footer`padding: 1rem;`;

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
		<FooterStyled>
			{data.site.siteMetadata.title} - footer component - made in Milano by {data.site.siteMetadata.author}
		</FooterStyled>
	);
};

export default Footer;
