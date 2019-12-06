import React from 'react';
import { Link, graphql, useStaticQuery } from 'gatsby';
import Layout from '../components/layout';
import PageTitle from '../components/Pagetitle';

const IndexPage = () => {
	const titleMultipleLine = (
		<React.Fragment>
			i <br />design <br />interfaces
		</React.Fragment>
	);

	const data = useStaticQuery(graphql`
		query {
			allMarkdownRemark {
				edges {
					node {
						frontmatter {
							title
							date
						}
						fields {
							slug
						}
					}
				}
			}
		}
	`);

	return (
		<Layout>
			<PageTitle
				title={titleMultipleLine}
				description="I tend to look for inspiration from observation, conversation, and everything around me to extend my
					perspective. I originally started with building websites from scratch with HTML, CSS and JavaScript.
					My deep interest in what does and doesn’t work in the web lead me to get more into how my design
					moves affect the user, almost the same way my interest in architecture and tech got me interested in
					experiential design. I want to be able to branch out as an experience designer, allowing myself to
					learn new and more meaningful ways to solve problems, and new skills that help me turn my ideas into
					real, and awesome experiences/products."
			/>

			<ul>
				{data.allMarkdownRemark.edges.map((edge, index) => {
					return (
						<li key={index}>
							<Link to={`/blog/${edge.node.fields.slug}`}>
								<span>{edge.node.frontmatter.date}</span>
								<h2>{edge.node.frontmatter.title}</h2>
							</Link>
						</li>
					);
				})}
			</ul>
		</Layout>
	);
};

export default IndexPage;
