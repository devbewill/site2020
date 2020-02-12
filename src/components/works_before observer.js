import React from 'react';
import { graphql, useStaticQuery, Link } from 'gatsby';
import styled from 'styled-components';
import { getRandomColor, Container, SectionTitle } from '../styles/styledComponent';
import { WorksStyled } from '../styles/worksStyled';

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
		<React.Fragment>
			<SectionTitle>works </SectionTitle>
			<Container>
				{data.allContentfulProject.edges.map((edge, index) => {
					return (
						<WorksStyled key={index}>
							<div className="workText">
								<h3>{edge.node.title}</h3>
								<p>{edge.node.descriptionLong.descriptionLong}</p>
								<Anchor to={`/portfolio/${edge.node.slug}`}>go to project</Anchor>
							</div>

							<div className="workVisual">
								{/* <img src={edge.node.featuredImage.file.url} alt="" /> */}
								{edge.node.gallery ? ( //IF not empty
									edge.node.gallery.map((img, index) => {
										return <img key={index} src={img.file.url} />;
									})
								) : null}
							</div>
						</WorksStyled>
					);
				})}
			</Container>
		</React.Fragment>
	);
};

export default Works;
