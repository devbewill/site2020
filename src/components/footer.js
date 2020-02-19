import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import styled from 'styled-components';

const Footer = () => {
	const StyledFooter = styled.footer`
		border-top: 0.3em solid ${(props) => props.theme.colors.primary};
		margin: 30vh auto 0 auto;
		padding: 1em;
		max-width: 80vw;

		ul {
			margin-top: 10vh;
			list-style-type: none;
			font-weight: 600;

			li {
				display: inline-block;
				padding: 0.1em;

				&:nth-child(-n + 2):after {
					content: ",";
				}

				a {
					color: inherit;
					text-decoration: none;
					transition: all 0.3s linear;

					&:hover {
						color: ${(props) => props.theme.colors.primary};
					}
				}
			}
		}
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
			<ul className="contatcs">
				<li>
					<a href="https://www.linkedin.com/in/stefanoperelli/" target="_blank">
						Linkedin
					</a>
				</li>
				<li>
					<a href="https://www.instagram.com/ste.esse" target="_blank">
						Instagram
					</a>
				</li>
				<li>
					<a href="mailto:sedprc@gmail.com" target="_blank">
						Mail
					</a>
				</li>
			</ul>
			👋
			{data.site.siteMetadata.title} - footer component - made in Milano by {data.site.siteMetadata.author}
		</StyledFooter>
	);
};

export default Footer;
