import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import styled from 'styled-components';

const Footer = () => {
	const StyledFooter = styled.footer`
		background: ${(props) => props.theme.colors.primary};
		color: #fff;
		padding: 1em;
		min-height: 10em;
	`;
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
