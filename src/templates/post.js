import React from 'react';
import { Link, graphql } from 'gatsby';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import Layout from '../components/layout';

export const query = graphql`
	query($slug: String!) {
		contentfulBlogPost(slug: { eq: $slug }) {
			title
			publishedDate(fromNow: true)
			featuredImage {
				fluid(maxWidth: 1500) {
					...GatsbyContentfulFluid_withWebp
				}
			}
			body {
				json
			}
		}
	}
`;

const Post = (props) => {
	const options = {
		renderNode: {
			'embedded-asset-block': (node) => {
				const alt = node.data.target.fields.title['en-US'];
				const url = node.data.target.fields.file['en-US'].url;
				return <img alt={alt} src={url} />;
			}
		}
	};

	const title = props.data.contentfulBlogPost.title;
	const publishedDate = props.data.contentfulBlogPost.publishedDate;
	const bodyPost = documentToReactComponents(props.data.contentfulBlogPost.body.json, options);

	return (
		<Layout>
			{/* if != null (in some post the featured images isnt defined) */}
			{props.data.contentfulBlogPost.featuredImage && (
				<img src={props.data.contentfulBlogPost.featuredImage.fluid.src} alt="" />
			)}

			<h1>{title}</h1>
			<div>{publishedDate}</div>
			<div className="bodyPost">{bodyPost}</div>

			<nav>
				<ul>
					<li>
						{props.pageContext.previous && (
							<Link to={`/blog/${props.pageContext.previous.slug}`} rel="prev">
								prev
							</Link>
						)}
					</li>
					<li>
						{props.pageContext.next && (
							<Link to={`/blog/${props.pageContext.next.slug}`} rel="next">
								next
							</Link>
						)}
					</li>
				</ul>
			</nav>
		</Layout>
	);
};

export default Post;
