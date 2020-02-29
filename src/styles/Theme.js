import React from 'react';
import { ThemeProvider } from 'styled-components';

const theme = {
	colors: {
		primary: '#fe003f',
		red: '#fe003f',
		yellow: '#fbff62',
		green: '#62ffaa',
		lightpurple: '#caafff',
		water: '#2ee8b6',
		softpink: '#ffdff1',
		purple: '7505d8'
	},
	fonts: [ 'sans-serif', 'Roboto' ],
	fontSizes: {
		small: '1em',
		medium: '2em',
		large: '3em'
	}
};

const Theme = ({ children }) => <ThemeProvider theme={theme}>{children}</ThemeProvider>;

export default Theme;
