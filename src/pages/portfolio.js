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

const PortfolioPage = () => {
	const data = useStaticQuery(graphql`
		query {
			allContentfulProject {
				edges {
					node {
						title
						slug
					}
				}
			}
		}
	`);

	return (
		<Layout>
			<Head title="works" />
			<Pagetitle title="works" description="some description" />

			<PostList>
				{data.allContentfulProject.edges.map((edge, index) => {
					return (
						<SinglePost key={index}>
							<Link to={`/portfolio/${edge.node.slug}`}>
								<h2>{edge.node.title}</h2>
							</Link>
						</SinglePost>
					);
				})}
			</PostList>
		</Layout>
	);
};

export default PortfolioPage;
