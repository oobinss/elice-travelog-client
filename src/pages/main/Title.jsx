import React from 'react';
import styled from 'styled-components';

function Title() {
	return (
		<TitleContainer>
			<TitleSection>
				<TitleText>logo</TitleText>
				<TitleButton>시작하기</TitleButton>
			</TitleSection>
			<VideoContainer>{/* 영상으로 수정 예정 */}</VideoContainer>
		</TitleContainer>
	);
}

export default Title;

const TitleContainer = styled.div`
	width: 100vw;
	hegith: 100vh;
	display: flex;
`;

const TitleSection = styled.section`
	width: 35vw;
	height: 100vh;
	background-color: #fff;
`;
const TitleText = styled.h2`
	font-size: 4rem;
	font-weight: 300;
	position: relative;
	top: 15rem;
	left: calc(17.5vw - 3rem);
`;
const TitleButton = styled.button`
	display: block;
	width: 10rem;
	height: 4rem;
	background-color: #5f6caf;
	color: #fff;
	font-size: 1.5rem;
	font-weight: 200;
	text-align: center;
	line-height: 4rem;
	border: none;
	position: relative;
	top: 18rem;
	left: calc(17.5vw - 5rem);
`;

const VideoContainer = styled.section`
	width: 65vw;
	height: 100vh;
	overflow: hidden;
	background-image: url('https://cdn.pixabay.com/photo/2016/03/04/19/36/beach-1236581_1280.jpg');
	background-repeat: no-repeat;
	background-position: right;
	background-size: cover;
`;
