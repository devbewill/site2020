import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

import Img from 'gatsby-image';

const Hero = () => {
	const data = useStaticQuery(graphql`
		query {
			file(relativePath: { eq: "heroImage.jpg" }) {
				childImageSharp {
					fixed(width: 400, height: 250) {
						...GatsbyImageSharpFixed
					}
				}
			}
		}
	`);
	return (
		<section>
			{/* {data.file.childImageSharp.fluid} */}
			<Img fixed={data.file.childImageSharp.fixed} draggable={false} alt="This is a picture of my face." />
			<div>
				<h1>Hi, I like websites.</h1>
				<p>Sometimes I make them.</p>
			</div>
		</section>
	);
};

export default Hero;
