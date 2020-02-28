import React from 'react';
import { Link } from 'gatsby';
import Theme from '../styles/Theme';
import Layout from '../components/layout';

const NotFound = () => {
	return (
		<Theme>
			<Layout>
				<h1>Page not found</h1>
				<p>
					<Link to="/">Head home</Link>
				</p>
			</Layout>
		</Theme>
	);
};

export default NotFound;
