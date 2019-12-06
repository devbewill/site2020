import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import postStyles from './post.module.scss';

export const query = graphql`
	query($slug: String!) {
		markdownRemark(fields: { slug: { eq: $slug } }) {
			frontmatter {
				title
				date
			}
			html
		}
	}
`;

const Blog = (props) => {
	return (
		<Layout>
			<h1>{props.data.markdownRemark.frontmatter.title}</h1>
			<h6>{props.data.markdownRemark.frontmatter.date}</h6>
			<div
				className={postStyles.postWrapper}
				dangerouslySetInnerHTML={{ __html: props.data.markdownRemark.html }}
			/>
		</Layout>
	);
};

export default Blog;
