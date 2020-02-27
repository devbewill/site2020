import React from 'react';
import styled from 'styled-components';

const Quote = () => {
	const QuoteSection = styled.section`
		margin-top: 5em;
		padding: 2em 1em;
		color: #222;

		@media only screen and (max-width: 600px) {
			margin-top: 0;
		}

		p {
			border-left: 0.2em solid ${(props) => props.theme.colors.primary};
			font-family: 'Playfair Display';
			font-size: 2rem;
			line-height: 1.2;
			padding: 1em;
			font-weight: 900;
			margin: 0;

			@media only screen and (max-width: 600px) {
				font-size: 1.5rem;
			}

			span {
				font-weight: 300;
				font-family: 'Muli';
				background: none;
				display: block;
				font-size: 1rem;
				margin-top: 2em;
				color: #222;
			}
		}
	`;

	return (
		<QuoteSection>
			<div className="content">
				<p>
					I never design a building before I've seen the site and met the people who will be using it.
					<span>Frank Lloyd Wright</span>
				</p>
			</div>
		</QuoteSection>
	);
};

export default Quote;
