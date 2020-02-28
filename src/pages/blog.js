import React from 'react';
import { Link, graphql, useStaticQuery } from 'gatsby';
import Theme from '../styles/Theme';
import { Container } from '../styles/styledComponent';
import Layout from '../components/layout';
import Head from '../components/head';
import styled from 'styled-components';
import Pagetitle from '../components/pageTitle';

const PostList = styled.div`
	padding-top: 10vh;
	min-height: 100vh;
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
`;

const Post = styled.div`
	position: relative;
	display: flex;
	flex-flow: column;
	margin: 1em 0;
	padding: 1.5em;
	width: calc(50% - 1em);
	min-height: 500px;
	transition: all 0.3s ease-in;

	h2 {
		font-family: 'Oswald';
		text-transform: uppercase;
		margin: 0;
		font-size: 2.1rem;
		letter-spacing: -4px;
		line-height: 0.95;
		font-weight: 900;
		transition: all 0.4s linear;
	}

	.date {
		text-align: right;
		font-size: 0.6em;
	}

	p {
		font-size: 0.8rem;
		margin: 0;
		margin-top: 0.5em;
		padding-bottom: 2em;
	}

	.tags {
		list-style-type: none;
		margin: 0;
		display: flex;
		font-size: 0.6rem;
		text-transform: uppercase;
		font-weight: 800;

		li {
			margin-right: 10px;
			color: ${(props) => props.theme.colors.primary};
		}
	}

	&:hover {
		/* transform: scale(1.1); */
		box-shadow: 0 2.8px 2.2px rgba(0, 0, 0, 0.024), 0 6.7px 5.3px rgba(0, 0, 0, 0.038),
			0 12.5px 10px rgba(0, 0, 0, 0.06), 0 22.3px 17.9px rgba(0, 0, 0, 0.062),
			0 41.8px 33.4px rgba(0, 0, 0, 0.076), 0 100px 80px rgba(0, 0, 0, 0.02);

		h2,
		a {
			color: ${(props) => props.theme.colors.primary};
		}
	}

	@media only screen and (max-width: 600px) {
		width: 100%;
		padding: 0;
		min-height: 0;

		h2 {
			font-size: 2.8rem;
			letter-spacing: -3px;
		}

		p,
		a,
		li,
		.date {
			font-size: 1rem;
		}

		&:hover {
			box-shadow: none;

			h2,
			a {
				color: ${(props) => props.theme.colors.primary};
			}
		}
	}
`;

const StyledLink = styled(Link)`
font-size: 0.8rem;
color: #444;
font-weight: 400;
transition: all 0.4s ease-in-out;
`;

// const ImgPost = styled.div`
// 	margin: 0 2em;
// 	height: 200px;
// 	width: 300px;
// 	background: url(${(props) => props.background});
// 	background-position: center center;
// 	background-size: cover;
// `;

const BlogPage = () => {
	const data = useStaticQuery(graphql`
		query {
			allContentfulBlogPost(sort: { fields: publishedDate, order: DESC }) {
				edges {
					node {
						title
						slug
						publishedDate(fromNow: true)
						tag
						featuredImage {
							fluid(maxWidth: 400) {
								...GatsbyContentfulFluid_withWebp
							}
						}
						bodyMd {
							childMarkdownRemark {
								excerpt
							}
						}
					}
				}
			}
		}
	`);

	return (
		<Theme>
			<Layout>
				<Container>
					<Head title="Words" />
					<Pagetitle title="Words" description="Stories from the web and stories written by me" />

					<PostList>
						{data.allContentfulBlogPost.edges.map((edge, index) => {
							return (
								<Post>
									{/* <div className="col">
										<ImgPost background={edge.node.featuredImage.fluid.src} />
									</div> */}
									<ul className="tags">
										{edge.node.tag.map((tag, index) => {
											return <li key={index}>{tag}</li>;
										})}
									</ul>
									<h2>{edge.node.title}</h2>
									<span className="date">{edge.node.publishedDate}</span>
									<p>{edge.node.bodyMd.childMarkdownRemark.excerpt}</p>

									<StyledLink to={`/blog/${edge.node.slug}`}>Read article</StyledLink>
								</Post>
							);
						})}
					</PostList>
				</Container>
			</Layout>
		</Theme>
	);
};

export default BlogPage;
