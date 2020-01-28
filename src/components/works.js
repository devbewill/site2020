import React from 'react';
import { graphql, useStaticQuery, Link } from 'gatsby';
import styled from 'styled-components';
import { Container } from '../styles/styledComponent';

const getRandomColor = () => {
	return `hsla(${360 * Math.random()},70%,80%,1)`;
};

const HomeProject = styled.div`
	max-width: 900px;
	margin: 5em auto;
	display: flex;
	justify-content: space-between;
	align-items: center;

	.workText {
		padding: 2em;
		flex: 1 1 0;

		h3 {
			font-size: 2.5em;
			margin-bottom: 0.2em;
		}

		p {
			padding: 0 1em;
		}
	}

	&:nth-child(even) {
		flex-direction: row-reverse;

		.workText {
			padding-left: 2em;
		}
	}
`;

const WorkVisual = styled.div`
padding: 2em;
	/* background: ${getRandomColor} url(${(props) => props.mockupImg}); */
	/* background-image: url(${(props) => props.bgImage}); */

background: linear-gradient(230deg, ${getRandomColor}  0%, ${getRandomColor}  100%);
background-size: contain;
background-position: center;
background-repeat: no-repeat;
flex: 1 1 0;
img {
	width: 100%;
}

`;

const Anchor = styled(Link)`
	display: block;
	text-align: right;
	padding-right: 4em;

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
						descriptionLong {
							descriptionLong
						}
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
		<Container>
			{data.allContentfulProject.edges.map((edge, index) => {
				return (
					<HomeProject key={index}>
						<div className="workText">
							<h3>{edge.node.title}</h3>
							{edge.node.descriptionLong ? ( //IF not empty
								Object.entries(edge.node.descriptionLong).map((desc) => {
									return <p>{desc[1]}</p>;
								})
							) : null}
							<Anchor to={`/portfolio/${edge.node.slug}`}>View</Anchor>
						</div>
						<WorkVisual bgImage={edge.node.featuredImage.file.url}>
							{edge.node.gallery ? ( //IF not empty
								edge.node.gallery.map((img, index) => {
									return <img key={index} src={img.file.url} />;
								})
							) : null}
							{/* <img src={edge.node.featuredImage.file.url} alt="" /> */}
						</WorkVisual>
					</HomeProject>
				);
			})}
		</Container>
	);
};

export default Works;
