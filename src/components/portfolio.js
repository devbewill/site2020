import React from 'react';
import { graphql, useStaticQuery, Link } from 'gatsby';
import vector from '../images/vector.svg';
import styled from 'styled-components';
import { Container } from '../styles/styledComponent';

const Grid = styled.div`
	padding: 4em;
	display: flex;
	max-width: none;
	flex-wrap: wrap;
	justify-content: space-between;
`;

const GridBox = styled.div`
	position: relative;
	padding: 0;
	display: flex;
	width: 45%;
	height: 300px;
	margin: 3em 0;
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

	/* ${GridBox}:hover & {
		transform: rotate(50deg);
		opacity: 1;
	} */
`;

const GridBoxDescription = styled.p`
	position: absolute;
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
	width: 100%;
	height: 100%;
	box-shadow: 0 2.8px 2.2px rgba(0, 0, 0, 0.034),0 6.7px 5.3px rgba(0, 0, 0, 0.048),0 12.5px 10px rgba(0, 0, 0, 0.06), 0 22.3px 17.9px rgba(0, 0, 0, 0.072),  0 41.8px 33.4px rgba(0, 0, 0, 0.086),  0 100px 80px rgba(0, 0, 0, 0.12);
	background-image: url(${(props) => props.img});

	background-size: cover;
	background-repeat: no-repeat;
	transition: all 600ms ease-in-out;

	opacity: 1;


	${GridBox}:hover & {
		/* opacity: 0; */
		transform: translate(10px,-10px)
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
		<Container fullwidth>
			<Grid>
				{data.allContentfulProject.edges.map((edge, index) => {
					return (
						<GridBox key={index}>
							<GridBoxHovering />
							<GridBoxDescription>{edge.node.description}</GridBoxDescription>
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
		</Container>
	);
};

export default Portfolio;
