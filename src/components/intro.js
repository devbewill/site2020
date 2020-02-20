import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import styled from 'styled-components';

const Intro = (props) => {
	const data = useStaticQuery(graphql`
		query {
			avatar: file(relativePath: { eq: "steperelli.jpeg" }) {
				childImageSharp {
					fluid(grayscale: true, maxWidth: 600, maxHeight: 600, cropFocus: CENTER, toFormat: PNG) {
						...GatsbyImageSharpFluid
					}
				}
			}
		}
	`);

	const IntroSection = styled.section`
		padding-top: 50vh;

		.infos {
			position: fixed;
			left: 0.5em;
			top: 80vh;
			transform: rotate(-90deg);
			transform-origin: left top 0;
			font-size: 0.8rem;
			display: block;
		}

		.avatar {
			position: absolute;
			right: 0;
			top: 25vh;
			width: 20vw;
		}

		p {
			max-width: 60vw;
			margin-top: 0.5em;
		}

		.underline {
			display: inline-block;
			border-bottom: 0.2em solid ${(props) => props.theme.colors.primary};
			line-height: 0.5;
		}

		@media only screen and (max-width: 600px) {
			h1 {
				font-size: 2.3rem;
			}

			h2 {
				font-size: 2.5rem;
			}

			p {
				font-size: inherit;
			}

			.infos {
				padding-top: 65vh;
			}

			.underline {
				background-position-y: calc(100% - 6px);
			}
		}
	`;

	return (
		<IntroSection>
			<span className="infos">Stefano Perelli __ Product Designer</span>
			<h1>
				Solving<br /> problems <br />with <span className="underline">design </span>
			</h1>
			<p>
				I love figuring out digital solutions to complex challenges and simplifying it to make a positive
				impact.
			</p>
			<div className="avatar">{/* <Img fluid={data.avatar.childImageSharp.fluid} /> */}</div>
		</IntroSection>
	);
};

export default Intro;
