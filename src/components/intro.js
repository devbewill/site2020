import React from 'react';
import styled from 'styled-components';

const Intro = () => {
	const IntroSection = styled.section`
		padding-top: 45vh;
		position: relative;

		.infos {
			position: fixed;
			left: 0.5em;
			top: 84vh;
			transform: rotate(-90deg);
			transform-origin: left top 0;
			font-size: 0.7rem;
			display: block;
		}

		.avatar {
			position: absolute;
			right: 0;
			top: 25vh;
			width: 20vw;
		}

		p {
			max-width: 45vw;
			margin-top: 0.5em;
		}

		.underline {
			display: inline-block;
			color: ${(props) => props.theme.colors.primary};
			/* border-bottom: 0.2em solid ${(props) => props.theme.colors.primary}; */
			line-height: 0.5;
		}


		@media only screen and (max-width: 600px) {
			padding-top: 55vh;
			h1 {
				font-size: 3.5rem;
				letter-spacing: -3px;
			}

			h2 {
				font-size: 2.5rem;
			}

			p {
				max-width:90vw;
				font-size: 0.95rem
			}

			.infos {
				padding-top: 0;
				position: static;
				font-size: 0.8rem;
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
