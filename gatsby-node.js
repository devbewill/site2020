const path = require('path');

module.exports.createPages = async ({ graphql, actions }) => {
	const { createPage } = actions;
	const blogTemplate = path.resolve('./src/templates/post.js');
	const projectTemplate = path.resolve('./src/templates/project.js');
	const res = await graphql(`
        query {
			allContentfulBlogPost {
				edges {
					node {
						slug
					}
				}
			}

			allContentfulProject {
				edges {
					node {
            			slug
					}
				}
			}
        }
    `);

	const posts = res.data.allContentfulBlogPost.edges;
	posts.forEach((edge, index) => {
		const previous = index === posts.length - 1 ? null : posts[index + 1].node;
		const next = index === 0 ? null : posts[index - 1].node;

		createPage({
			component: blogTemplate,
			path: `/blog/${edge.node.slug}`,
			context: {
				slug: edge.node.slug,
				next,
				previous
			}
		});
	});

	const projects = res.data.allContentfulProject.edges;
	projects.forEach((edge, index) => {
		const previous = index === projects.length - 1 ? null : projects[index + 1].node;
		const next = index === 0 ? null : projects[index - 1].node;

		createPage({
			component: projectTemplate,
			path: `/portfolio/${edge.node.slug}`,
			context: {
				slug: edge.node.slug,
				next,
				previous
			}
		});
	});
};
