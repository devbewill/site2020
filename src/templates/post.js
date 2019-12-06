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
			<div className={postStyles.postWrapper}>
				<h6>{props.data.markdownRemark.frontmatter.date}</h6>
				<h1>{props.data.markdownRemark.frontmatter.title}</h1>
				<div dangerouslySetInnerHTML={{ __html: props.data.markdownRemark.html }} />
			</div>
		</Layout>
	);
};

export default Blog;
