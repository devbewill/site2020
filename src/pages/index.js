import React from 'react';
import Layout from '../components/layout';
import Pagetitle from '../components/pagetitle';
import Head from '../components/head';
import Works from '../components/works';

const IndexPage = () => {
	const titleMultipleLine = (
		<React.Fragment>
			Solving <br />problems <br />with design
		</React.Fragment>
	);

	return (
		<Layout>
			<Head title="Home" />
			<Pagetitle
				title={titleMultipleLine}
				description="My expertise covers the entire digital product design process, including user experience and interface, frontend development and API connections. I like building new products or evolving existing ones to permit perform better from both a user and business perspective."
			/>
			<Works />
		</Layout>
	);
};

export default IndexPage;
