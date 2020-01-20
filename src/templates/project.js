import React from 'react';
import { Link, graphql } from 'gatsby';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import Layout from '../components/layout';

export const query = graphql`
	query($slug: String!) {
		contentfulProject(slug: { eq: $slug }) {
			title
			description
			body {
				json
			}
			featuredImage {
				fluid(maxWidth: 400) {
					...GatsbyContentfulFluid_withWebp
				}
			}
		}
	}
`;

const Project = (props) => {
	const options = {
		renderNode: {
			'embedded-asset-block': (node) => {
				const alt = node.data.target.fields.title['en-US'];
				const url = node.data.target.fields.file['en-US'].url;
				return <img alt={alt} src={url} />;
			}
		}
	};

	const title = props.data.contentfulProject.title;
	const body = props.data.contentfulProject.body.body;
	const bodyPost = documentToReactComponents(props.data.contentfulProject.body.json, options);

	return (
		<Layout>
			{/* if != null (in some post the featured images isnt defined) */}
			{props.data.contentfulProject.featuredImage && (
				<img src={props.data.contentfulProject.featuredImage.fluid.src} alt="" />
			)}

			<h1>{title}</h1>

			{/* <div>{publishedDate}</div> */}
			<div className="bodyPost">{bodyPost}</div>

			<nav>
				<ul>
					<li>
						{props.pageContext.previous && (
							<Link to={`/portfolio/${props.pageContext.previous.slug}`} rel="prev">
								{`Go to ${props.pageContext.previous.slug}`}
							</Link>
						)}
					</li>
					<li>
						{props.pageContext.next && (
							<Link to={`/portfolio/${props.pageContext.next.slug}`} rel="next">
								{`Go to ${props.pageContext.next.slug}`}
							</Link>
						)}
					</li>
				</ul>
			</nav>
		</Layout>
	);
};

export default Project;
