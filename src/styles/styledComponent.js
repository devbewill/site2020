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
`;

export const StyledFooter = styled.footer`
	background: #ffdff1;
	padding: 1em;
	min-height: 10em;
`;

// export const SectionTitle = styled.h1`
// 	position: fixed;
// 	top: 30%;
// 	text-align: right;
// 	padding: 0.5em 0.2em;
// 	margin: 0;
// 	line-height: 1.5;
// 	font-size: 1rem;
// 	font-weight: 800;
// 	writing-mode: vertical-rl;
// 	color: #fff;
// 	background: #111;
// `;
