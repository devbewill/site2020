import React from 'react';
import { Link, graphql, useStaticQuery } from 'gatsby';
import Layout from '../components/layout';
import Head from '../components/head';
import Img from 'gatsby-image';
import Works from '../components/works';
import { Container } from '../styles/styledComponent';

const IndexPage = (props) => {
	// const titleMultipleLine = (
	// 	<React.Fragment>
	// 		Solving <br />problems <br />with design
	// 	</React.Fragment>
	// );

	const history = [
		{
			year: 'present',
			role: 'Product Designer',
			company: 'PAX Italia'
		},
		{
			year: '2018',
			role: 'UX Designer',
			company: 'PAX Italia'
		},
		{
			year: '2016',
			role: 'Fullstack Designer',
			company: 'Digital Entity - NTTDATA'
		},
		{
			year: '2013',
			role: 'Frontend Developer',
			company: 'Digital Entity - NTTDATA'
		},
		{
			year: '2012',
			role: 'Owner',
			company: 'skillybiz.com'
		},
		{
			year: '2009',
			role: 'Web Designer',
			company: 'Freelance'
		}
	];

	return (
		<Layout>
			<Container>
				<Head title="Home" />
				<section className="pageTitle">
					{/* <div className="shape">
						<div class="blob">
							<svg width="600" height="600" viewBox="0 0 600 600">
								<path>
									<animate
										attributeName="d"
										dur="8s"
										repeatCount="indefinite"
										values="M431.3 121.9c22 40.1 11.3 97.5 13.3 146.9 2 49.5 16.6 91.1 4.3 121.8-12.2 30.6-51.3 50.4-88.5 55.1-37.1 4.7-72.4-5.7-108.8-17.1-36.5-11.3-74.1-23.7-104-52-29.9-28.2-52-72.4-48.4-115.4 3.5-43 32.7-84.8 70.5-122.2 37.7-37.3 84-70.2 134.5-75.1 50.4-5 105.1 17.9 127.1 58z;
					
									M404.4 176.7c20.9 16.4 20.8 58.8 38.8 106.2 18.1 47.4 54.4 99.7 40.9 123.6-13.5 23.9-76.7 19.3-131.6 40.4-54.8 21-101.2 67.7-150.5 71.7-49.4 4.1-101.7-34.5-107.8-81.9C88 389.2 128 333 144.2 278c16.2-55.1 8.5-108.8 30.5-125 22-16.1 73.7 5.5 120.4 11.3 46.7 5.9 88.5-3.9 109.3 12.4z;
                  
                  M431.3 121.9c22 40.1 11.3 97.5 13.3 146.9 2 49.5 16.6 91.1 4.3 121.8-12.2 30.6-51.3 50.4-88.5 55.1-37.1 4.7-72.4-5.7-108.8-17.1-36.5-11.3-74.1-23.7-104-52-29.9-28.2-52-72.4-48.4-115.4 3.5-43 32.7-84.8 70.5-122.2 37.7-37.3 84-70.2 134.5-75.1 50.4-5 105.1 17.9 127.1 58z;"
									/>
								</path>
							</svg>
						</div>
					</div> */}
					<span className="infos">Stefano Perelli __ Product Designer</span>
					<h1>
						Solving<br /> problems <br />with <span className="underline">design</span>
					</h1>

					{/* <p>
						My expertise covers the entire digital product design process, including user experience and
						interface, frontend development and API connections. I like building new products or evolving
						existing ones to permit perform better from both a user and business perspective.
					</p> */}
				</section>
			</Container>

			{/* <Pagetitle
				title={titleMultipleLine}
				description="My expertise covers the entire digital product design process, including user experience and interface, frontend development and API connections. I like building new products or evolving existing ones to permit perform better from both a user and business perspective."
			/> */}
			<section className="quote">
				<div className="content">
					<p>
						I never design a building before I've seen the site and met the people who will be using it.
						<span>Frank Lloyd Wright</span>
					</p>
				</div>
			</section>
			<section className="knowhow">
				<h2 className="align-right">
					know<span>how</span>
				</h2>
				<div className="content">
					<p>
						In every project is necessary to <span>listen</span> what people are saying and <span>ask</span>{' '}
						the right questions. On <span>UX</span> side, I'm fluent with most areas that the field offers,
						i love <span>minimal UI</span> and clean <span>typography</span>. Thanks to my experience as
						<span>dev</span> and <span>creative</span>, i can understand both creation sides of a digital
						product always keeping an eye on <span>business</span> and <span>costs</span> specifics. In the
						small projects, i can <span>lead</span> all the entire process without losing myself, with the
						big ones i can <span>manage</span> the project throught <span>AGILE</span> or <span>LEAN</span>
						methodology cooperating closely with the whole <span>team</span>.
					</p>
				</div>
			</section>
			<section className="imgWrapper">
				<Img fluid={props.data.intersection.childImageSharp.fluid} />
			</section>

			<section className="toolkit">
				<h2>
					tool<span>kit</span>
				</h2>
				<div className="content">
					<p>
						I have always tried to begin following a <span>content first</span> approach, so after the
						contents have been clarified i open <span>Sketch</span> to give a primal shape to the idea and
						to organize a sort of <span>mind map</span>. Once finally the idea has achieved a satisfying
						shape i always googling to check if i can introducing some new skill in my comfort zone or if
						it's better to hold off for a better time. Sometimes i’ve used tools like <span>Adobe XD</span>
						or <span>Framer</span> to show some <span>POC</span> to the customers. After this, as a
						supporter of <span>JAMStack</span> architecture, i start with the tech side figuring out which
						<span>javascript</span> library or framework is better to achieve the specific goal. I like the
						flexibility of <span>React</span> and its whole ecosystem, <span>styled components</span> and
						the <span>stylesheet</span> declinations (obviously <span>SCSS</span> remain the king), all
						connected togheter by <span>headless API</span> with content managed through an
						<span>headless CMS</span> and released as <span>responsive</span> products ready for every
						touchpoint.
					</p>
				</div>
			</section>
			<section className="imgWrapper">
				<Img fluid={props.data.cycle.childImageSharp.fluid} />
			</section>
			<section className="history">
				<h2 className="align-right">
					<span>hi</span>story
				</h2>
				<div className="entries">
					{history.map((job, index) => {
						return (
							<div key={index} className="entry">
								<div className="title">{job.year}</div>
								<div className="body">
									<p>
										{job.role}
										<span>{job.company}</span>
									</p>
								</div>
							</div>
						);
					})}
				</div>
			</section>

			<section className="lastworks">
				<h2>
					last<span>works</span>
				</h2>

				<ul>
					{props.data.works.edges.map((edge, index) => {
						return (
							<li key={index}>
								<div className="placeholder">&#10230;</div>
								<div className="hover-title">{edge.node.title}</div>
								<div className="hover-image">
									<img src={edge.node.featuredImage.file.url} alt="" />
								</div>
							</li>
						);
					})}
				</ul>
			</section>
		</Layout>
	);
};

export default IndexPage;

export const query = graphql`
	query {
		works: allContentfulProject {
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
		intersection: file(relativePath: { eq: "intersection.png" }) {
			childImageSharp {
				fluid(maxWidth: 1000) {
					...GatsbyImageSharpFluid
				}
			}
		}
		cycle: file(relativePath: { eq: "cycle.png" }) {
			childImageSharp {
				fluid(maxWidth: 1000) {
					...GatsbyImageSharpFluid
				}
			}
		}
	}
`;
