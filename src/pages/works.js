import React, { useState } from 'react';
import { InView } from 'react-intersection-observer';
import { graphql, useStaticQuery, Link } from 'gatsby';
import styled from 'styled-components';
import Theme from '../styles/Theme';
import Layout from '../components/layout';
import { Container } from '../styles/styledComponent';
import { WorksStyled } from '../styles/worksStyled';

const Anchor = styled(Link)`
	display: block;
	text-align: right;
	padding-right: 4em;

`;

const SectionTitle = styled.h1`
	position: fixed;
	z-index: 999;
	right: 10vw;
	top: 10%;
	text-align: right;
	padding: 0;
	margin: 0;
	font-size: 4rem;
	font-weight: 800;
	opacity: 0;
	transition: opacity 0.5s ease-in-out;

	&.--inView {
		opacity: 1;
	}

	&.--notInView {
		opacity: 0;
	}
`;

const Works = (props, inView) => {
	const setInViewWorkTitle = (inView, entry) => {
		if (!inView) {
			setTimeout(() => {
				setInViewEl(false);
			}, 500);
		} else {
			setTimeout(() => {
				setCurrentWork(entry.target.title);

				setInViewEl(true);
			}, 500);
		}

		console.log(entry);
	};
	const [ currentWork, setCurrentWork ] = useState('');
	const [ inViewEl, setInViewEl ] = useState(false);

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

	// console.log('Inview:', inView, entry)
	return (
		<Theme>
			<Layout>
				<SectionTitle className={`${!inViewEl ? '--notInView' : '--inView'}`}>{currentWork} </SectionTitle>
				<Container>
					{data.allContentfulProject.edges.map((edge, index) => {
						return (
							<WorksStyled className={`${!inViewEl ? '--notInView' : '--inView'}`}>
								<InView
									key={index}
									threshold="1"
									title={edge.node.title}
									onChange={setInViewWorkTitle}
								/>
								<div className="workText">
									<h3>{edge.node.title}</h3>
									{/* <p>{edge.node.descriptionLong.descriptionLong}</p> */}
									<Anchor to={`/portfolio/${edge.node.slug}`}>go to project</Anchor>
								</div>

								<div className="workVisual">
									{/* <img src={edge.node.featuredImage.file.url} alt="" /> */}
									{edge.node.gallery ? ( //IF not empty
										edge.node.gallery.map((img, index) => {
											return <img key={index} src={img.file.url} alt={edge.node.title} />;
										})
									) : null}
								</div>
								<InView />
							</WorksStyled>
						);
					})}
				</Container>
			</Layout>
		</Theme>
	);
};

export default Works;
