import React from 'react';
import { Link, graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import Theme from '../styles/Theme';
import { Container } from '../styles/styledComponent';
import Layout from '../components/layout';
import Head from '../components/head';
import styled from 'styled-components';

const PostList = styled.div`
	padding-top: 20vh;
	min-height: 100vh;
	display: flex;
	align-items: center;
	justify-content: space-between;
	flex-wrap: wrap;
`;

const StyledLink = styled(Link)`
background: ${(props) => props.theme.colors.primary};
color: #fff;
/* color: #222; */
box-shadow: 10px 10px 50px -6px rgba(240,240,240,1);
text-decoration: none;
	width: 48%;
	margin: 1em 0;

	.container {
		padding: 2em 1em;
		

		.tags {
			list-style-type: none;
			margin: 0;
			display: flex;
			font-size: 0.6rem;
			text-transform: uppercase;
			font-weight: 800;

			li {
				margin-right: 10px;
				color: ${(props) => props.theme.colors.primary};;
				background: #fff;
				padding: 0.1em 0.5em;
			}
		}

		p {
			padding-bottom: 2em;
			font-size: 0.9em;
			}
	}

	h2 {
		margin-top: 0.2em;
		font-family: 'Montserrat';
		text-transform: uppercase;
		font-size: 1.8rem;
		letter-spacing: -1px;
		line-height: 0.9;
		font-weight: 900;
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
					{/* <Pagetitle title="Words" description="some description" /> */}

					<PostList>
						{data.allContentfulBlogPost.edges.map((edge, index) => {
							return (
								<StyledLink key={index} to={`/blog/${edge.node.slug}`}>
									{/* <Img fluid={edge.node.featuredImage.fluid} /> */}
									<div className="container">
										<ul className="tags">
											{edge.node.tag.map((tag, index) => {
												return <li key={index}>{tag}</li>;
											})}
										</ul>
										<h2>{edge.node.title}</h2>
										<p>{edge.node.bodyMd.childMarkdownRemark.excerpt}</p>
										<span>{edge.node.publishedDate}</span>
									</div>
								</StyledLink>
							);
						})}
					</PostList>
				</Container>
			</Layout>
		</Theme>
	);
};

export default BlogPage;
