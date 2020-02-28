import React from 'react';
import styled from 'styled-components';

const Content = styled.div`
	.gatsby-highlight {
		margin: 4rem 0;
		font-size: 0.7em;
		pre {
			font-size: 0.7rem;
			margin-bottom: 2rem;
		}

		span.parameter {
			font-family: Consolas, Courier New, monospace;
		}
	}

	ul {
		list-style: none;
		margin-bottom: 2rem;
		li {
			position: relative;
			margin-bottom: 0.8rem;
			&:before {
				content: '';
				position: absolute;
				height: 8px;
				width: 2px;

				top: 0.9rem;
				left: -1.5rem;
				z-index: 5;
			}
			&:after {
				content: '';
				position: absolute;
				height: 8px;
				width: 2px;

				top: 0.9rem;
				left: -1.5rem;
				z-index: 5;
				transform: rotate(90deg);
			}
		}
	}
`;

export default function TextContent({ content }) {
	return (
		<Content
			dangerouslySetInnerHTML={{
				__html: content
			}}
		/>
	);
}
