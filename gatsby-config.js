/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */
const path = require('path');

module.exports = {
	siteMetadata: {
		title: 'stefanoperelli.com',
		author: 'Stefano Perelli'
	},
	plugins: [
		`gatsby-plugin-styled-components`,
		'gatsby-plugin-react-helmet',
		{
			resolve: 'gatsby-source-contentful',
			options: {
				spaceId: process.env.CONTENTFUL_SPACE_ID,
				accessToken: process.env.CONTENTFUL_ACCESS_TOKEN
			}
		},

		'gatsby-plugin-sass',
		{
			resolve: 'gatsby-source-filesystem',
			options: {
				name: 'images',
				// path: `${__dirname}/src`
				path: path.join(__dirname, `src`, `images`)
			}
		},
		`gatsby-plugin-sharp`,
		`gatsby-transformer-sharp`,
		{
			resolve: `gatsby-transformer-remark`,
			options: {
				plugins: [
					{
						resolve: `gatsby-remark-prismjs`,
						options: {
							classPrefix: 'language-',
							inlineCodeMarker: true,
							aliases: {},
							showLineNumbers: false,
							noInlineHighlight: false
						}
					}
				]
			}
		}
	]
};
