import styled from 'styled-components';

export const getRandomColor = () => {
	return `hsla(${360 * Math.random()},70%,80%,1)`;
};

export const Container = styled.div`
	margin: 0 auto;
	align-items: center;
	justify-content: center;
	max-width: ${(props) => (props.fullwidth ? 'none' : '80vw')};
	flex-grow: 1;

	@media only screen and (max-width: 600px) {
		max-width: ${(props) => (props.fullwidth ? 'none' : '90vw')};
	}
`;

export const ImageWrapper = styled.div`
	margin: 0 auto;
	padding: 5vw ${(props) => props.sidePadding || '0'};

	@media only screen and (max-width: 600px) {
		padding: 0;
	}

	img {
		margin: 0 auto;
	}
`;
