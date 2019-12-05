import React from 'react';
import Layout from '../components/layout';
import PageTitle from '../components/Pagetitle';

const AboutPage = () => {
	return (
		<Layout>
			<PageTitle>
				<h1>
					something <br />about <br />me
				</h1>
				<p>
					I tend to look for inspiration from observation, conversation, and everything around me to extend my
					perspective. I originally started with building websites from scratch with HTML, CSS and JavaScript.
					My deep interest in what does and doesn’t work in the web lead me to get more into how my design
					moves affect the user, almost the same way my interest in architecture and tech got me interested in
					experiential design. I want to be able to branch out as an experience designer, allowing myself to
					learn new and more meaningful ways to solve problems, and new skills that help me turn my ideas into
					real, and awesome experiences/products.
				</p>
			</PageTitle>
		</Layout>
	);
};

export default AboutPage;
