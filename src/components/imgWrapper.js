import React from 'react';
import styled from 'styled-components';

const WrapperImage = styled.div`
	margin: 0 auto;
	padding: 5vw 10vw;
	@media only screen and (max-width: 600px) {
		padding: 5vw 3vw;
	}

	img {
		margin: 0 auto;
	}
`;

const ImgWrapper = (props) => {
	return <WrapperImage>{props.children}</WrapperImage>;
};

export default ImgWrapper;
