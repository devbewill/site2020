import React from 'react';
import Layout from '../components/layout';
import Pagetitle from '../components/pagetitle';
import Head from '../components/head';
import Portfolio from '../components/portfolio';

const IndexPage = () => {
	const titleMultipleLine = (
		<React.Fragment>
			i <br />design <br />interfaces
		</React.Fragment>
	);

	return (
		<Layout>
			<Head title="Home" />
			<Pagetitle
				title={titleMultipleLine}
				description="I tend to look for inspiration from observation, conversation, and everything around me to extend my
					perspective. I originally started with building websites from scratch with HTML, CSS and JavaScript.
					My deep interest in what does and doesn’t work in the web lead me to get more into how my design
					moves affect the user, almost the same way my interest in architecture and tech got me interested in
					experiential design. I want to be able to branch out as an experience designer, allowing myself to
					learn new and more meaningful ways to solve problems, and new skills that help me turn my ideas into
					real, and awesome experiences/products."
			/>

			<p>
				My expertise covers the entire digital product design process, including user experience, user interface
				design, fronted development and API connections. I like building new products from scratch or optimizing
				existing ones to permit perform better from both a user and business perspective. Product design vision
				and conceptual design are the key part of every success project.
			</p>

			<p>
				I am an insatiably curious and emotionally intelligent senior product designer who enjoys bringing
				enthusiasm to both my work and my team. I pride myself on my ability to learn quickly, my drive, and my
				diverse skillset (of UX, visual design and development). Having programming skills and API and SDK
				knowledge, allow me to create data-driven designs that translate well to code. My background in UX
				allows me to design user-centric experiences for both individual projects and for scalable recurring
				revenue generating products.
			</p>

			<h1>My focus is</h1>

			<Portfolio />
		</Layout>
	);
};

export default IndexPage;
