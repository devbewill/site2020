import React from 'react';
import { useStaticQuery } from 'gatsby';
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
				font-family: 'Oswald', sans-serif;
				margin: 0;
				text-transform: uppercase;
				font-size: 3rem;
				letter-spacing: -5px;
				font-weight: 900;
				line-height: 0.9;
				pointer-events: auto;
				cursor: pointer;
				transition: all 0.3s linear;
			}

			.description {
				opacity: 0;
				font-weight: 300;
				margin-right: 0;
				margin-left: 30vw;
				transition: all 0.3s linear;
				line-height: 1;
				height: 0;
				padding-top: 0.5em;
			}

			&:hover {
				.title {
					color: ${(props) => props.theme.colors.primary};
				}

				.description {
					opacity: 1;
					height: 4em;
				}
			}
		}

		.hover-box:hover + .hover-image {
			opacity: 1;
			pointer-events: none;
		}

		.hover-image {
			position: absolute;
			max-width: 80%;
			opacity: 0;
			z-index: 2;
			top: 10vw;
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

		@media only screen and (max-width: 600px) {
			min-height: 0;
			ul {
				padding: 0;
				li {
					margin-bottom: 0;
				}
			}

			.hover-box {
				.title {
					font-size: 2rem;
					letter-spacing: -3px;
				}
				.description {
					padding-top: 0;
					margin-left: 0;
				}
				&:hover {
					.description {
						height: 3em;
					}
				}
			}

			.hover-image {
				display: none;
			}
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
