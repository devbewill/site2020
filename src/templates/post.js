import React from 'react';
import { Link, graphql } from 'gatsby';
import Img from 'gatsby-image';
import Theme from '../styles/Theme';
import { Container } from '../styles/styledComponent';
import Layout from '../components/layout';
import TextContent from '../components/textContent';

export const query = graphql`
	query($slug: String!) {
		contentfulBlogPost(slug: { eq: $slug }) {
			title
			publishedDate(fromNow: true)
			featuredImage {
				fluid(maxWidth: 1000) {
					...GatsbyContentfulFluid_withWebp
				}
			}
			bodyMd {
				childMarkdownRemark {
					html
				}
			}
			tag
		}
	}
`;

const Post = (props) => {
	// const options = {
	// 	renderNode: {
	// 		'embedded-asset-block': (node) => {
	// 			const alt = node.data.target.fields.title['en-US'];
	// 			const url = node.data.target.fields.file['en-US'].url;
	// 			return <img alt={alt} src={url} />;
	// 		}
	// 	}
	// };

	const title = props.data.contentfulBlogPost.title;
	const publishedDate = props.data.contentfulBlogPost.publishedDate;
	const bodyMD = props.data.contentfulBlogPost.bodyMd.childMarkdownRemark.html;
	const tags = props.data.contentfulBlogPost.tag;
	// const danger_dom = <div dangerouslySetInnerHTML={{ __html: bodyMD }} />;
	// const dom = <div>{danger_dom}</div>;

	return (
		<Theme>
			<Layout>
				{props.data.contentfulBlogPost.featuredImage && (
					<Img fluid={props.data.contentfulBlogPost.featuredImage.fluid} alt="" />
				)}
				<Container>
					<h1>{title}</h1>
					<div>{publishedDate}</div>
					<ul>
						{tags.map((tag, index) => {
							return <li key={index}>{tag}</li>;
						})}
					</ul>

					<TextContent content={bodyMD} />

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
				</Container>
			</Layout>
		</Theme>
	);
};

export default Post;
