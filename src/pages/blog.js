import React from 'react';
import { Link, graphql, useStaticQuery } from 'gatsby';
import Theme from '../styles/Theme';
import { Container } from '../styles/styledComponent';
import Layout from '../components/layout';
import Head from '../components/head';
import styled from 'styled-components';
import Pagetitle from '../components/pageTitle';

const PostList = styled.div`
	margin-top: 10vh;
	display: grid;
  	grid-gap: 2vw;
  	grid-template-columns:repeat(auto-fit,minmax(22vw,1fr));
  	/* grid-auto-rows: 20vw;
  	grid-auto-flow: dense; */
`;

const Post = styled(Link)`
	position: relative;
	display: flex;
	flex-flow: column;
	transition: all 0.2s linear;
	margin: 0.5em 0;
	box-shadow: 0px 1px 35px 0px rgba(0, 0, 0, 0.3);

	.date {
		position: absolute;
		padding: 0.2em 0.4em;
		background: ${(props) => props.theme.colors.primary};
		text-transform: uppercase;
		color: #fff;
		right: 0;
		font-size: 0.5em;
	}

	.content {
		width: 100%;
		padding: 0.6em 1em;

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

		h2 {
			font-family: 'Oswald';
			text-transform: uppercase;
			margin: 0.25em 0;
			font-size: 1.2rem;
			letter-spacing: -1px;
			line-height: 0.95;
			font-weight: 900;
			transition: all 0.4s linear;
		}

		p {
			font-size: 0.7rem;
			padding-bottom: 1em;
			margin: 0;
		}

	}


	&:hover {
		transform: scale(1.05);

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


const ImgPost = styled.div`
	height: 200px;
	width: 100%;
	background: url(${(props) => props.background});
	background-position: center center;
	background-size: cover;
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
								<Post to={`/blog/${edge.node.slug}`}>

									<div className="thumb">
										<span className="date">{edge.node.publishedDate}</span>
										<ImgPost background={edge.node.featuredImage.fluid.src} />
									</div>

									<div className="content">
										<ul className="tags">
											{edge.node.tag.map((tag, index) => {
												return <li key={index}>{tag}</li>;
											})}
										</ul>
										<h2>{edge.node.title}</h2>

										<p>{edge.node.bodyMd.childMarkdownRemark.excerpt}</p>
									</div>
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
