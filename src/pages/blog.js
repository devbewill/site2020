import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Layout from '../components/layout';
import PageTitle from '../components/Pagetitle';

const BlogPage = () => {
	const data = useStaticQuery(graphql`
		query {
			allMarkdownRemark {
				edges {
					node {
						frontmatter {
							title
							date
						}
					}
				}
			}
		}
	`);

	return (
		<Layout>
			<PageTitle>
				<h1>
					the <br />posts <br />page
				</h1>
				<p>I tend to look for inspiration from observation</p>
			</PageTitle>
			<ul>
				{data.allMarkdownRemark.edges.map((edge) => {
					return (
						<li>
							<h3>{edge.node.frontmatter.title}</h3>
						</li>
					);
				})}
			</ul>
		</Layout>
	);
};

export default BlogPage;
