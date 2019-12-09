import React from 'react';
import Layout from '../components/layout';
import Pagetitle from '../components/pagetitle';
import Head from '../components/head';

const AboutPage = () => {
	return (
		<Layout>
			<Head title="About" />
			<Pagetitle title="about" description="about desc" />
		</Layout>
	);
};

export default AboutPage;
