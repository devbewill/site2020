import styled from 'styled-components';
import { getRandomColor } from './styledComponent';

export const WorksStyled = styled.div`
	padding: 0;
	margin: 5rem auto;
	display: flex;
    align-items: center;
	justify-content: space-between;

	@media screen and (max-width: 1024px) {
		flex-direction: column-reverse;
	}

	.workText {
        max-width: 500px;

		@media screen and (max-width: 1024px) {
			max-width: none;
		}

		h3 {
			margin-bottom: 0.2em;
		}

		p {
			padding: 0 0.5em;
			color: #777;
			font-weight: 300;
		}
	}

	.workVisual {
        box-shadow: 10px 14px 57px -31px rgba(0,0,0,0.78); 
        max-width: 500px;
		
		@media screen and (max-width: 1024px) {
			max-width: none;
        }
        
        position: relative;
	/* background: ${getRandomColor} url(${(props) => props.mockupImg});  */
	/* background-image: url(${(props) => props.bgImage}); */

		/* background: linear-gradient(230deg, ${getRandomColor}  0%, ${getRandomColor}  100%); */


		img {
			 /* box-shadow: 10px 14px 57px -31px rgba(0,0,0,0.78);  */
		}


	}

	&:nth-child(even) {
		flex-direction: row-reverse;

		@media screen and (max-width: 1024px) {
			flex-direction: column-reverse;
		}
	}

`;
