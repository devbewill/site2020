import React from 'react';
import { graphql, useStaticQuery, Link } from 'gatsby';
import styled from 'styled-components';

const Grid = styled.div`
display: flex;
margin 5em auto;
max-width: none;
flex-wrap: wrap;
justify-content: space-between;
`;

const GridBox = styled.div`
	position: relative;
	display: flex;
	width: 30%;
	height: 300px;
	margin: 0;
	flex-direction: row;
	justify-content: center;
`;

const GridBoxHovering = styled.div`
	position: absolute;
	left: 0%;
	top: 0%;
	right: 0%;
	bottom: 0%;
	z-index: auto;
	background-image: url(https://uploads-ssl.webflow.com/5ca06830f4c36e4b847dd28d/5d5c71e48ebd510807f1a2f1_Vector1.png);
	background-position: 50% 50%;
	background-size: contain;
	background-repeat: no-repeat;
	transition: transform 400ms ease, opacity 300ms ease;
	opacity: 0;

	${GridBox}:hover & {
		transform: rotate(50deg);
		opacity: 1;
	}
`;

const GridBoxDescription = styled.div`
	position: absolute;
	left: 0%;
	top: 0%;
	right: 0%;
	bottom: 0%;
	z-index: auto;
	display: flex;
	width: 100%;
	margin-bottom: 0px;
	flex-direction: column;
	justify-content: center;
	flex-wrap: wrap;
	align-items: stretch;
	align-content: center;
    text-align: left;
    transition: opacity 200ms ease;
    opacity: 0;
    ${GridBox}:hover & {
		opacity: 1;

`;

const StyledLink = styled(Link)`
position: relative;
    z-index: 999;
    display: block;
    width: 90%;
    height: 100%;
    margin-right: auto;
    margin-left: auto;
    justify-content: center;
    align-items: flex-end;
    align-self: center;
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
}
`;

const Portfolio = (props) => {
	const data = useStaticQuery(graphql`
		query {
			allContentfulPortfolio {
				edges {
					node {
						project
						description {
							description
						}
						featuredImage {
							fluid(maxWidth: 200) {
								...GatsbyContentfulFluid_withWebp
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
			{data.allContentfulPortfolio.edges.map((edge, index) => {
				return (
					<GridBox key={index}>
						<GridBoxHovering />
						<GridBoxDescription>{edge.node.description.description}</GridBoxDescription>
						<StyledLink to="/" img={edge.node.featuredImage.fluid.src} />
						{/* <img src={edge.node.featuredImage.fluid.src} alt="" />
						<h1>{edge.node.project}</h1>
						<p>{edge.node.description.description}</p> */}
						{/* <h2>Gallery</h2>
						{edge.node.gallery.map((img, index) => {
							return <img key={index} src={img.fluid.src} alt="" />;
						})} */}
					</GridBox>
				);
			})}
		</Grid>
	);
};

export default Portfolio;
