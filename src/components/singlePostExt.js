import React from 'react';
import styled from 'styled-components';

const SinglePostExt = ({ postProps }) => {
	const cleanUrl = (url) => {
		let urlCleaned = url.replace(/^(?:https?:\/\/)?(?:www\.)?/i, '').split('/')[0];
		return urlCleaned;
	};

	const StyledLink = styled.a`
		position: relative;
		display: flex;
		flex-flow: column;
		padding: 0.5em;
		width: calc(33% - 1em);
		transition: all 0.3s linear;
		text-decoration: none;
		color: #111;

		.flexed {
			flex-flow: column;
		}

		h2 {
			font-family: 'Oswald';
			text-transform: uppercase;
			margin: 0;
			font-size: 1.5rem;
			letter-spacing: -2px;
			line-height: 1;
			font-weight: 900;
			transition: all 0.3s linear;
		}

		.date {
			text-align: right;
			font-size: 0.6em;
			padding-top: 1em;
			transition: all 0.3s linear;
		}

		p {
			font-size: 0.8em;
			margin: 0;
			margin-top: 0.5em;
			padding-bottom: 2em;
		}

		.tags {
			list-style-type: none;
			margin: 0;
			display: flex;
			font-size: 0.6rem;
			text-transform: uppercase;
			font-weight: 800;
			transition: all 0.4s linear;

			li {
				margin: 0;
				margin-right: 10px;
				color: ${(props) => props.theme.colors.primary};
			}
		}
		.by {
			font-size: 0.5em;
			padding: 0.5em 0;
			margin: 0;

			span {
				font-weight: 800;
			}
		}

		.body {
			font-size: 0.7em;
		}

		&:hover {
			background: ${(props) => props.theme.colors.primary};

			h2,
			span,
			li,
			p {
				color: #fff;
			}
		}

		@media only screen and (max-width: 600px) {
			width: 100%;
			padding: 0;

			h2 {
				letter-spacing: -1px;
			}

			.by {
				font-size: 0.8rem;
			}
		}
	`;

	// const ImgPost = styled.div`
	// 	opacity: 0;
	// 	top: -120px;
	// 	right: -2vw;
	// 	position: absolute;
	// 	height: 150px;
	// 	width: 200px;
	// 	background: url(${(props) => props.background});
	// 	background-position: center center;
	// 	background-size: cover;
	// 	transition: all 0.4s ease-in;
	// 	border: 0.3em solid #fff;

	// 	${StyledLink}:hover & {
	// 		opacity: 1;
	// 	}
	// `;

	const ImgPost = styled.div`
		opacity: 0;
		top: 10vh;
		right: 0;
		position: fixed;
		height: 250px;
		width: 350px;
		background: url(${(props) => props.background});
		background-position: center center;
		background-size: cover;
		transition: all 0.4s ease-in;
		z-index: -1;

		${StyledLink}:hover & {
			opacity: 1;
		}
	`;

	return (
		<StyledLink href={postProps.target}>
			<ImgPost background={postProps.imgPost} />
			<ul className="tags">
				{postProps.tags.map((tag, index) => {
					return <li key={index}>{tag}</li>;
				})}
			</ul>
			<div className="flexed">
				<h2>{postProps.title}</h2>
				{/* <span className="date">{postProps.date}</span> */}
				<p className="by">
					by <span>{cleanUrl(postProps.target)}</span>
				</p>
			</div>
			{/* <p className="body">{postProps.excerpt}</p> */}
		</StyledLink>
	);
};

export default SinglePostExt;
