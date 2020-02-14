import React from 'react';
import { Link, graphql } from 'gatsby';
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

	return (
		<Layout>
			<Container>
				<Head title="Home" />
				<div className="pageTitle">
					<h1>
						Solving <br />problem <br />with <span className="underline">design</span>
					</h1>

					<p>
						My expertise covers the entire digital product design process, including user experience and
						interface, frontend development and API connections. I like building new products or evolving
						existing ones to permit perform better from both a user and business perspective.
					</p>
				</div>
			</Container>

			{/* <Pagetitle
				title={titleMultipleLine}
				description="My expertise covers the entire digital product design process, including user experience and interface, frontend development and API connections. I like building new products or evolving existing ones to permit perform better from both a user and business perspective."
			/> */}
			<section className="knowhow">
				<h2>knowhow</h2>
				<div className="content">
					<p>
						In every project is necessary to <span>listen</span> what people are saying and <span>ask</span>the
						right questions. On <span>UX</span> side, I'm fluent with most areas that the field offers, i
						love <span>minimal UI</span> and clean <span>typography</span>. Thanks to my experience as
						<span>dev</span> and <span>creative</span>, i can understand both creation sides of a digital
						product always keeping an eye on <span>business</span> and <span>costs</span> specifics. In the
						small projects, i can <span>lead</span> all the entire process without losing myself, with the
						big ones i can <span>manage</span> the project throught <span>AGILE</span> or <span>LEAN</span>
						methodology cooperating closely with the whole <span>team</span>.
					</p>
				</div>
			</section>
			<div className="imgWrapper">
				<Img fluid={props.data.intersection.childImageSharp.fluid} />
			</div>

			<section className="toolkit">
				<h2>toolkit</h2>
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
			<div className="imgWrapper">
				<Img fluid={props.data.cycle.childImageSharp.fluid} />
			</div>
		</Layout>
	);
};

export default IndexPage;

export const query = graphql`
	query {
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
