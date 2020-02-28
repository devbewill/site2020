import React from 'react';
import Header from './header.js';
import Footer from './footer.js';
import '../styles/index.scss';
import '../styles/default.scss';
import styled from 'styled-components';

const StyledLayout = styled.div`min-height: 100vh;`;

const Layout = (props) => {
	return (
		<StyledLayout>
			<Header />
			{props.children}
			<Footer />
		</StyledLayout>
	);
};

export default Layout;
