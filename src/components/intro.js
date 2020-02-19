import React from 'react';
import styled from 'styled-components';

const Intro = () => {
	const IntroSection = styled.section`
		max-width: 70vw;

		.infos {
			font-size: 0.8rem;
			display: block;
			padding-top: 50vh;
		}

		p {
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
				Solving<br /> problems <br />with <span className="underline">design</span>
			</h1>
		</IntroSection>
	);
};

export default Intro;
