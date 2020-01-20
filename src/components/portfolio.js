import React from 'react';
import { graphql, useStaticQuery, Link } from 'gatsby';
import vector from '../images/vector.svg';
import styled from 'styled-components';

const Grid = styled.div`
	display: flex;
	margin: 5em auto;
	max-width: none;
	flex-wrap: wrap;
	justify-content: space-between;
`;

const GridBox = styled.div`
	position: relative;
	padding: 1em;
	display: flex;
	width: 30%;
	height: 200px;
	margin: 1.5em 0;
	flex-direction: row;
	justify-content: center;
`;

const getRandomColor = () => {
	return `hsla(${360 * Math.random()},70%,80%,1)`;
};

const GridBoxHovering = styled.div`
	position: absolute;
	left: 0%;
	top: 0%;
	right: 0%;
	bottom: 0%;
	z-index: auto;
	/* background-image: url(https://uploads-ssl.webflow.com/5ca06830f4c36e4b847dd28d/5d5c71e48ebd510807f1a2f1_Vector1.png); */
	mask: url(${vector});
	mask-size: contain;
	mask-repeat: no-repeat;
	mask-position: center;
	background: ${getRandomColor};
	transition: transform 400ms ease, opacity 300ms ease;
	opacity: 0;

	${GridBox}:hover & {
		transform: rotate(50deg);
		opacity: 1;
	}
`;

const GridBoxDescription = styled.p`
	position: absolute;
	left: 0%;
	top: 50%;
	right: 0%;
	bottom: 0%;
	width: 100%;
	font-weight: 800;
	text-align: center;
	transition: opacity 200ms ease;
	opacity: 0;
	${GridBox}:hover & {
		opacity: 1;
	}
`;

const Anchor = styled(Link)`
	position: relative;
	z-index: 999;
	display: block;
	width: 80%;
	height: 100%;
	background-color: transparent;
	background-image: url(${(props) => props.img});
	background-position: 50% 50%;
	background-size: contain;
	background-repeat: no-repeat;
	transition: opacity 200ms ease;
	opacity: 1;

	${GridBox}:hover & {
		opacity: 0;
	}
`;

const Portfolio = (props) => {
	const data = useStaticQuery(graphql`
		query {
			allContentfulProject {
				edges {
					node {
						title
						slug
						body {
							body
						}
						featuredImage {
							file {
								url
							}
						}
						gallery {
							fluid {
								src
							}
						}
					}
				}
			}
		}
	`);

	return (
		<Grid>
			{data.allContentfulProject.edges.map((edge, index) => {
				return (
					<GridBox key={index}>
						<GridBoxHovering />
						{console.log(edge.node.body)}
						<GridBoxDescription>{edge.node.title}</GridBoxDescription>
						{/* <img src={edge.node.featuredImage.fluid.src} alt="" />
						<h1>{edge.node.project}</h1>
						<p>{edge.node.description.description}</p> */}
						{/* <h2>Gallery</h2>
						{edge.node.gallery.map((img, index) => {
							return <img key={index} src={img.fluid.src} alt="" />;
						})} */}
						<Anchor to={`/portfolio/${edge.node.slug}`} img={edge.node.featuredImage.file.url} />
					</GridBox>
				);
			})}
		</Grid>
	);
};

export default Portfolio;
