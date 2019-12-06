import React from 'react';
import { Link, graphql, useStaticQuery } from 'gatsby';
import Layout from '../components/layout';
import PageTitle from '../components/Pagetitle';
import blogStyles from './blog.module.scss';

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
			<PageTitle title="blog" description="some description" />
			<ul className={blogStyles.posts}>
				{data.allMarkdownRemark.edges.map((edge, index) => {
					return (
						<li key={index} className={blogStyles.post}>
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

export default BlogPage;
