import React from 'react';
import { graphql, useStaticQuery, Link } from 'gatsby';
import styled from 'styled-components';
import { Container } from '../styles/styledComponent';

const getRandomColor = () => {
	return `hsla(${360 * Math.random()},70%,80%,1)`;
};

const WorksGrid = styled.div`
	display: grid;
	margin: 5em 0;
	grid-template-columns: repeat(12, 1fr);
	grid-template-rows: repeat(10, 10vh);
`;

const Anchor = styled(Link)`
    display: block;
    grid-column-start: 2;
    grid-column-end: 6;
    grid-row-start: 8;
    grid-row-end: 10;

`;

const GridMockup = styled.div`
	position: relative;
	grid-column-start: 7;
	grid-column-end: 13;
	grid-row-start: 1;
	grid-row-end: 13;

	background: ${getRandomColor} url(${(props) => props.mockupImg});
	background-size: 100%;
	background-position: center;
	background-repeat: no-repeat;
`;

const GridBrand = styled.div`
	grid-column-start: 2;
	grid-column-end: 6;
	grid-row-start: 2;
	grid-row-end: 8;
	background-image: url(${(props) => props.brandImg});
	background-size: contain;
	background-position: center;
	background-repeat: no-repeat;
`;

const Works = (props) => {
	const data = useStaticQuery(graphql`
		query {
			allContentfulProject {
				edges {
					node {
						title
						slug
						description
						body {
							body
						}
						featuredImage {
							file {
								url
							}
						}
						gallery {
							file {
								url
							}
						}
					}
				}
			}
		}
	`);

	return (
		<Container fullwidth>
			{data.allContentfulProject.edges.map((edge, index) => {
				return (
					<WorksGrid key={index}>
						<GridBrand brandImg={edge.node.featuredImage.file.url} />

						{edge.node.gallery ? ( //IF not empty
							edge.node.gallery.map((img, index) => {
								return (
									<GridMockup key={index} mockupImg={img.file.url}>
										<div />
									</GridMockup>
								);
							})
						) : null}

						<Anchor to={`/portfolio/${edge.node.slug}`}>
							<h3>{edge.node.title}</h3>
							<p>{edge.node.description}</p>
						</Anchor>
					</WorksGrid>
				);
			})}
		</Container>
	);
};

export default Works;
