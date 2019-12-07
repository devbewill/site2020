import React from 'react';
import Layout from '../components/layout';
import PageTitle from '../components/Pagetitle';
import Head from '../components/head';

const IndexPage = () => {
	const titleMultipleLine = (
		<React.Fragment>
			i <br />design <br />interfaces
		</React.Fragment>
	);

	return (
		<Layout>
			<Head title="Home" />
			<PageTitle
				title={titleMultipleLine}
				description="I tend to look for inspiration from observation, conversation, and everything around me to extend my
					perspective. I originally started with building websites from scratch with HTML, CSS and JavaScript.
					My deep interest in what does and doesn’t work in the web lead me to get more into how my design
					moves affect the user, almost the same way my interest in architecture and tech got me interested in
					experiential design. I want to be able to branch out as an experience designer, allowing myself to
					learn new and more meaningful ways to solve problems, and new skills that help me turn my ideas into
					real, and awesome experiences/products."
			/>
		</Layout>
	);
};

export default IndexPage;
