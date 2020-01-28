import React from 'react';
import { Link, graphql, useStaticQuery } from 'gatsby';
import Head from '../components/head';
import Layout from '../components/layout';
import Pagetitle from '../components/pagetitle';
import styled from 'styled-components';

const PostList = styled.ul`
	list-style-type: none;
	margin: 0;
`;

const SinglePost = styled.li`
	margin: 0.5rem 0;
	a {
		display: flex;
		align-items: center;
		color: #222;
		text-decoration: none;

		h2 {
			margin: 0 0.5rem 0;
		}

		span {
			display: block;
			font-size: 0.9rem;
		}
	}
`;

const BlogPage = () => {
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
			<Head title="Words" />
			<Pagetitle title="Words" description="some description" />

			<PostList>
				{data.allContentfulBlogPost.edges.map((edge, index) => {
					return (
						<SinglePost key={index}>
							<Link to={`/blog/${edge.node.slug}`}>
								<span>{edge.node.publishedDate}</span>
								<h2>{edge.node.title}</h2>
							</Link>
						</SinglePost>
					);
				})}
			</PostList>
		</Layout>
	);
};

export default BlogPage;
