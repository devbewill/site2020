import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';
import SinglePostInt from './singlePostInt';
import SinglePostExt from './singlePostExt';

const PostsSection = styled.section`
	.postContainer {
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
	}
`;

export default () => (
	<StaticQuery
		query={graphql`
			query {
				allContentfulBlogPost(sort: { fields: publishedDate, order: DESC }) {
					edges {
						node {
							title
							link
							slug
							publishedDate(fromNow: true)
							tag
							featuredImage {
								fluid(maxWidth: 600) {
									...GatsbyContentfulFluid_withWebp
								}
							}
							bodyMd {
								childMarkdownRemark {
									excerpt
									html
								}
							}
						}
					}
				}
			}
		`}

		render={(data) => (
			<>
				<PostsSection>
					<h2>
						<span>in</span>sight
					</h2>
					<div className="postContainer">
						{data.allContentfulBlogPost.edges.map((edge, index) => {
							if (index < 9) {
								let target, postProps;
								edge.node.link ? (target = edge.node.link) : (target = `/blog/${edge.node.slug}`);

								postProps = {
									slug: `/blog/${edge.node.slug}`,
									imgPost: edge.node.featuredImage.fluid.src,
									externalLink: edge.node.link,
									tags: edge.node.tag,
									title: edge.node.title,
									body: edge.node.bodyMd.childMarkdownRemark.html,
									date: edge.node.publishedDate,
									excerpt: edge.node.bodyMd.childMarkdownRemark.excerpt,
									target: target
								};

								return !postProps.externalLink ? (
									<SinglePostInt key={index} postProps={postProps} />
								) : (
										<SinglePostExt key={index} postProps={postProps} />
									);
							} else {
								return null;
							}
						})}
					</div>
				</PostsSection>
			</>
		)}
	/>
);

// const PostList = () => {
// 	const data = useStaticQuery(graphql`
// 		query {
// 			allContentfulBlogPost(sort: { fields: publishedDate, order: DESC }) {
// 				edges {
// 					node {
// 						title
// 						link
// 						slug
// 						publishedDate(fromNow: true)
// 						tag
// 						featuredImage {
// 							fluid(maxWidth: 600) {
// 								...GatsbyContentfulFluid_withWebp
// 							}
// 						}
// 						bodyMd {
// 							childMarkdownRemark {
// 								excerpt
// 								html
// 							}
// 						}
// 					}
// 				}
// 			}
// 		}
// 	`);

// 	const PostsSection = styled.section`
// 		display: flex;
// 		flex-wrap: wrap;
// 		justify-content: space-between;
// 	`;

// 	return (
// 		<React.Fragment>
// 			<h2>
// 				<span>in</span>sight
// 			</h2>
// 			<PostsSection>
// 				{data.allContentfulBlogPost.edges.map((edge, index) => {
// 					if (index < 9) {
// 						let target, postProps;
// 						edge.node.link ? (target = edge.node.link) : (target = `/blog/${edge.node.slug}`);

// 						postProps = {
// 							slug: `/blog/${edge.node.slug}`,
// 							imgPost: edge.node.featuredImage.fluid.src,
// 							externalLink: edge.node.link,
// 							tags: edge.node.tag,
// 							title: edge.node.title,
// 							body: edge.node.bodyMd.childMarkdownRemark.html,
// 							date: edge.node.publishedDate,
// 							excerpt: edge.node.bodyMd.childMarkdownRemark.excerpt,
// 							target: target
// 						};

// 						return !postProps.externalLink ? (
// 							<SinglePostInt key={index} postProps={postProps} />
// 						) : (
// 							<SinglePostExt key={index} postProps={postProps} />
// 						);
// 					} else {
// 						return null;
// 					}
// 				})}
// 			</PostsSection>
// 		</React.Fragment>
// 	);
// };

// export default PostList;
