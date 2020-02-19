import React from 'react';
import styled from 'styled-components';

const Timeline = () => {
	const history = [
		{
			year: 'present',
			role: 'Product Designer',
			company: 'PAX Italia'
		},
		{
			year: '2018',
			role: 'UX Designer',
			company: 'PAX Italia'
		},
		{
			year: '2016',
			role: 'Fullstack Designer',
			company: 'Digital Entity - NTTDATA'
		},
		{
			year: '2013',
			role: 'Frontend Developer',
			company: 'Digital Entity - NTTDATA'
		},
		{
			year: '2012',
			role: 'Owner',
			company: 'skillybiz.com'
		},
		{
			year: '2009',
			role: 'Web Designer',
			company: 'Freelance'
		}
	];

	const TimelineSection = styled.section`
		position: relative;
		min-height: 100vh;
		margin: 0;

		&:before {
			content: '';
			position: absolute;
			top: 0px;
			left: 15vw;
			bottom: 0px;
			width: 4px;
			background-color: #000;
			@media only screen and (min-width: 700px) {
				left: 50%;
			}
		}
		.entries {
			width: calc(100% - 80px);
			max-width: 800px;
			margin: auto;
			position: relative;
			left: -5px;
			overflow: hidden;

			.entry {
				width: 80%;
				float: right;
				padding: 30px 20px;
				clear: both;
				text-align: left;
				&:not(:first-child) {
					margin-top: -60px;
				}

				&:first-child {
					.title:before {
						content: '';
						position: absolute;
						background: ${(props) => props.theme.colors.primary};
						border: 4px solid #000;
					}
				}

				@media only screen and (min-width: 700px) {
					width: calc(50% - 80px);
				}

				.title {
					font-size: 0.7rem;
					color: #a9a9a9;
					line-height: 0.8;
					position: relative;

					&:before {
						content: '';
						position: absolute;
						width: 25px;
						height: 25px;
						border: 4px solid ${(props) => props.theme.colors.primary};
						background-color: #fff;
						border-radius: 100%;
						top: 2em;
						transform: translateY(-50%);
						right: calc(100% + 44px);
						z-index: 1000;

						@media only screen and (min-width: 700px) {
							right: calc(100% + 81px);
						}
					}
				}
				.body {
					p {
						font-size: 1rem;
						font-weight: 800;

						span {
							display: block;
							font-size: 0.9rem;
							font-weight: 300;
							line-height: 0.9;
						}
					}
				}

				&:nth-child(2n) {
					@media only screen and (min-width: 700px) {
						text-align: right;
						float: left;
						.title {
							&:before {
								left: calc(100% + 94px);
							}
							&.big:before {
								transform: translate(-8px, -50%);
							}
						}
					}
				}
			}
		}
	`;

	return (
		<TimelineSection>
			<h2 className="align-right">
				<span>hi</span>story
			</h2>
			<div className="entries">
				{history.map((job, index) => {
					return (
						<div key={index} className="entry">
							<div className="title">{job.year}</div>
							<div className="body">
								<p>
									{job.role}
									<span>{job.company}</span>
								</p>
							</div>
						</div>
					);
				})}
			</div>
		</TimelineSection>
	);
};

export default Timeline;
