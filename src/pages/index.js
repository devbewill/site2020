import React from 'react';
import { Link, graphql, useStaticQuery } from 'gatsby';
import Layout from '../components/layout';
import Head from '../components/head';
import Img from 'gatsby-image';
import Works from '../components/works';
import { Container } from '../styles/styledComponent';

const IndexPage = (props) => {
	const titleMultipleLine = (
		<React.Fragment>
			Solving <br />problems <br />with design
		</React.Fragment>
	);

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
					<h1>
						Solving<br /> problems <br />with <span className="underline">design</span>
					</h1>

					<p>
						My expertise covers the entire digital product design process, including user experience and
						interface, frontend development and API connections. I like building new products or evolving
						existing ones to permit perform better from both a user and business perspective.
					</p>
				</section>
			</Container>

			{/* <Pagetitle
				title={titleMultipleLine}
				description="My expertise covers the entire digital product design process, including user experience and interface, frontend development and API connections. I like building new products or evolving existing ones to permit perform better from both a user and business perspective."
			/> */}
			<section className="quote">
				<div className="content">
					<p>
						<em>
							I never design a building before I've seen the site and met the people who will be using it.
						</em>
						<span>__Frank Lloyd Wright</span>
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
										<p>{job.company}</p>
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
							<li>
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
