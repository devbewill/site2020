import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import styled from 'styled-components';

const LastWorks = () => {
	const data = useStaticQuery(graphql`
		query {
			allContentfulProject {
				edges {
					node {
						title
						slug
						description
						body {
							body
						}
						featuredImage {
							file {
								url
							}
						}
						gallery {
							fluid {
								src
							}
						}
					}
				}
			}
		}
	`);

	const WorksSection = styled.section`
		position: relative;
		min-height: 100vh;
		ul {
			margin: 0;
			padding: 3em 0;
			list-style-type: none;
			display: flex;
			flex-direction: column;

			@media only screen and (max-width: 600px) {
				padding: 2em 1em;
			}

			li {
				display: block;

				&:hover {
					&:first-child .placeholder {
						opacity: 0;
					}
				}

				&:first-child .placeholder {
					visibility: visible;
					opacity: 1;
				}
			}
		}
		.hover-box {
			text-align: right;
			position: relative;
			z-index: 3;

			.title {
				font-family: BlinkMacSystemFont, sans-serif;
				margin: 0;
				padding-bottom: 10px;
				text-transform: uppercase;
				font-size: 3.5rem;
				letter-spacing: -5px;
				font-weight: 900;
				line-height: 0.6;
				pointer-events: auto;
				cursor: pointer;
				transition: all 0.3s linear;

				@media only screen and (max-width: 600px) {
					font-size: 2.1rem;
					letter-spacing: -3px;
					line-height: 0.8;
				}
			}

			.description {
				opacity: 0;
				padding-left: 30vw;
				transition: all 0.3s linear;
				line-height: 1.2;
				height: 0;
			}

			&:hover {
				.title {
					color: ${(props) => props.theme.colors.primary};
				}

				.description {
					opacity: 1;
					height: 2em;
				}
			}
		}

		.hover-box:hover + .hover-image {
			opacity: 1;
			pointer-events: none;
		}

		.hover-image {
			position: absolute;
			opacity: 0;
			z-index: 2;
			top: 5vw;
			left: -20vw;
			bottom: 0;
			pointer-events: none;
			text-align: right;
			transition: all 0.3s ease-in;
		}

		.hover-image img {
			max-width: 100% !important;
			max-height: 100% !important;
			width: auto !important;
			height: auto !important;
			margin-bottom: 0;
		}
	`;

	return (
		<WorksSection>
			<h2>
				last<span>works</span>
			</h2>

			<ul>
				{data.allContentfulProject.edges.map((edge, index) => {
					return (
						<li key={index}>
							<div className="hover-box">
								<div className="title">{edge.node.title}</div>
								<div className="description">{edge.node.description}</div>
							</div>
							<div className="hover-image">
								<img src={edge.node.featuredImage.file.url} alt="" />
							</div>
						</li>
					);
				})}
			</ul>
		</WorksSection>
	);
};

export default LastWorks;
