import React from 'react';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import Theme from '../styles/Theme';
import { Container, ImageWrapper } from '../styles/styledComponent';
import Layout from '../components/layout';
import Head from '../components/head';
import Intro from '../components/intro';
import Timeline from '../components/timeline';
import Quote from '../components/quote';
import LastWorks from '../components/lastWorks';
import PostsList from '../components/postsList';

const IndexPage = (props) => {
	return (
		<Theme>
			<Layout>
				<Container>
					<Head title="Home" />
					<Intro />

					<Quote />
					<section className="knowhow">
						<h2 className="align-right">
							know<span>how</span>
						</h2>

						<p>
							In every project is necessary to <span>listen</span> what people are saying and{' '}
							<span>ask</span> the right questions. On <span>UX</span> side, I'm fluent with most areas
							that the field offers, i love <span>minimal UI</span> and clean <span>typography</span>.
							Thanks to my experience as <span>dev</span> and <span>creative</span>, i can understand both
							creation sides of a digital product always keeping an eye on <span>business</span> and{' '}
							<span>costs</span> specifics. In the small projects, i can <span>lead</span> all the entire
							process without losing myself, with the big ones i can <span>manage</span> the project
							throught <span>AGILE</span> or <span>LEAN</span> methodology cooperating closely with the
							whole <span>team</span>.
						</p>
					</section>
					<ImageWrapper sidePadding="15vw">
						<Img fluid={props.data.intersection.childImageSharp.fluid} />
					</ImageWrapper>
					<section className="toolkit">
						<h2>
							tool<span>kit</span>
						</h2>
						<div className="content">
							<p>
								I have always tried to begin following a <span>content first</span> approach, so after
								the contents have been clarified i open <span>Sketch</span> to give a primal shape to
								the idea and to organize a sort of <span>mind map</span>. Once finally the idea has
								achieved a satisfying shape i always googling to check if i can introducing some new
								skill in my comfort zone or if it's better to hold off for a better time. Sometimes i’ve
								used tools like <span>Adobe XD</span> or <span>Framer</span> to show some{' '}
								<span>POC</span> to the customers. After this, as a supporter of <span>JAMStack</span>{' '}
								architecture, i start with the tech side figuring out which <span>javascript</span>{' '}
								library or framework is better to achieve the specific goal. I like the flexibility of{' '}
								<span>React</span> and its whole ecosystem, <span>styled components</span> and the{' '}
								<span>stylesheet</span> declinations (obviously <span>SCSS</span> remain the king), all
								connected togheter by <span>headless API</span> with content managed through an{' '}
								<span>headless CMS</span> and released as <span>responsive</span> products ready for
								every touchpoint.
							</p>
						</div>
					</section>
					<ImageWrapper>
						<Img className="cycle" fluid={props.data.cycle.childImageSharp.fluid} />
					</ImageWrapper>
					<Timeline />
					<PostsList />
					<LastWorks />
				</Container>
			</Layout>
		</Theme>
	);
};

export default IndexPage;

export const query = graphql`
	query {
		intersection: file(relativePath: { eq: "intersection.png" }) {
			childImageSharp {
				fluid(maxWidth: 900) {
					...GatsbyImageSharpFluid
				}
			}
		}
		cycle: file(relativePath: { eq: "cycle.png" }) {
			childImageSharp {
				fluid(maxWidth: 900) {
					...GatsbyImageSharpFluid
				}
			}
		}
		avatar: file(relativePath: { eq: "steperelli.jpeg" }) {
			childImageSharp {
				fluid(maxWidth: 500) {
					...GatsbyImageSharpFluid
				}
			}
		}
	}
`;
