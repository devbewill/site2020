import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import '../styles/index.scss';

// Searching for images to show and link to original size
const AboutPage = () => {
	const data = useStaticQuery(graphql`
		query {
			allImageSharp {
				edges {
					node {
						fluid(maxWidth: 1500, fit: CONTAIN) {
							src
							originalImg
						}
					}
				}
			}
		}
	`);
	return (
		<div>
			{data.allImageSharp.edges.map((edge, index) => {
				return (
					<div className="fullWidth">
						<a key={index} href={edge.node.fluid.originalImg}>
							{' '}
							<img src={edge.node.fluid.src} />
						</a>
					</div>
				);
			})}
		</div>
	);
};

export default AboutPage;
