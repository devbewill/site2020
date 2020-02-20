import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import styled from 'styled-components';

const Footer = () => {
	const StyledFooter = styled.footer`
		background: ${(props) => props.theme.colors.primary};
		margin: 30vh auto 0 auto;
		padding: 3em 20vw 1em 20vw;
		color: #fff;

		h2 {
			font-size: 2.5rem;
			line-height: 1;
		}

		ul {
			margin: 0;
			margin-top: 1em;
			list-style-type: none;
			font-weight: 300;
			font-size: 2rem;

			li {
				display: inline-block;
				padding: 0.1em;

				&:nth-child(-n + 2):after {
					content: " /";
				}

				a {
					color: inherit;
					text-decoration: none;
					transition: all 0.3s linear;

					&:hover {
						color: #222;
					}
				}
			}
		}

		.credits {
			margin: 0;

			font-size: 1rem;
			padding-top: 4em;
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
			<h2>
				Hey!<br />I'm always up for new challenge 💪
			</h2>
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

			<p class="credits">
				{data.site.siteMetadata.title} <br />
			</p>
		</StyledFooter>
	);
};

export default Footer;
