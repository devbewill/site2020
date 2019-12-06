import React from 'react';
import { Link, graphql, useStaticQuery } from 'gatsby';
import Layout from '../components/layout';
import PageTitle from '../components/Pagetitle';
import blogStyles from './blog.module.scss';

const BlogPage = () => {
	// LOCALE POSTS
	//const data = useStaticQuery(graphql`
	// 	query {
	// 		allMarkdownRemark {
	// 			edges {
	// 				node {
	// 					frontmatter {
	// 						title
	// 						date
	// 					}
	// 					fields {
	// 						slug
	// 					}
	// 				}
	// 			}
	// 		}
	// 	}
	// `);

	const data = useStaticQuery(graphql`
		query {
			allContentfulBlogPost(sort: { fields: publishedDate, order: DESC }) {
				edges {
					node {
						title
						slug
						publishedDate(fromNow: true)
					}
				}
			}
		}
	`);

	return (
		<Layout>
			<PageTitle title="blog" description="some description" />

			<ul className={blogStyles.posts}>
				{data.allContentfulBlogPost.edges.map((edge, index) => {
					return (
						<li key={index} className={blogStyles.post}>
							<Link to={`/blog/${edge.node.slug}`}>
								<span>{edge.node.publishedDate}</span>
								<h2>{edge.node.title}</h2>
							</Link>
						</li>
					);
				})}
			</ul>
		</Layout>
	);
};

export default BlogPage;
