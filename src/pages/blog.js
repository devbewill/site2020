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
			{/* <PageTitle>
				<h1>
					the <br />posts <br />page
				</h1>

				<p>I tend to look for inspiration from observation</p>
			</PageTitle> */}
			<ul className={blogStyles.posts}>
				{data.allMarkdownRemark.edges.map((edge) => {
					return (
						<li className={blogStyles.post}>
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
