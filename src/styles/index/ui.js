import styled from 'styled-components';

export const Headline = styled.h1`
	margin-bottom: 40px;
	text-align: center;
`;

export const Hometext = styled.p`
	font-size: 24px;
	margin-bottom: 40px;
	line-height: 1.5;
	text-align: center;
`;

export const ImgWrapper = styled.div`
	max-width: 300px;
	margin: 0 auto 40px auto;
	transition: all .2s linear;

	&:hover {
		transform: scale(1.2) rotate(7deg);
	}
`;