import styled from 'styled-components';

const getRandomColor = () => {
	return `hsla(${360 * Math.random()},70%,80%,1)`;
};

export const Container = styled.div`
	margin: 0 auto;
	align-items: center;
	justify-content: center;
	max-width: ${(props) => (props.fullwidth ? 'none' : '80vw')};
	flex-grow: 1;
`;
