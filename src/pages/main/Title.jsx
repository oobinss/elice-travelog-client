import React from 'react';
import styled from 'styled-components';
import { ImSearch } from 'react-icons/im';

function Title() {
	const scrolling = () => {
		const viewHight = window.innerHeight;
		window.scrollTo(0, viewHight);
	};
	return (
		<div>
			<TitleContainer>
				<TitleSection>
					<TitleText>logo</TitleText>
					<TitleButton onClick={scrolling}>시작하기</TitleButton>
				</TitleSection>
				<VideoContainer>{/* 영상으로 수정 예정 */}</VideoContainer>
			</TitleContainer>
			<SearchSection>
				<SearchBarContainer>
					<SearchBarTitle>어디로 떠나세요?</SearchBarTitle>
					<SearchBarInput />
					<Search />
				</SearchBarContainer>
				<CardContainer>
					<Card></Card>
					<Card></Card>
					<Card></Card>
					<Card></Card>
				</CardContainer>
			</SearchSection>
		</div>
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
	top: calc(50vh - 2rem);
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
	top: 50vh;
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

const SearchSection = styled.section`
	width: 100vw;
	height: 100vh;
	background-image: url('https://cdn.pixabay.com/photo/2018/11/29/21/19/hamburg-3846525_1280.jpg');
	background-repeat: no-repeat;
	background-size: cover;
	opacity: 0.85;
`;

const SearchBarContainer = styled.div`
	width: 50rem;
	height: 9rem;
	background-color: #edf7fa;
	border-radius: 20px;
	box-shadow: 7px 7px 4px rgba(0, 0, 0, 0.25);
	position: relative;
	top: 20vh;
	left: calc(50vw - 25rem);
`;
const SearchBarTitle = styled.p`
	text-align: center;
	font-size: 1.5rem;
	padding-top: 1.5rem;
`;

const SearchBarInput = styled.input`
	width: 30rem;
	height: 1.7rem;
	position: relative;
	top: 2rem;
	left: 9rem;
	border: none;
	border-radius: 10px;
`;
const Search = styled(ImSearch)`
	position: relative;
	top: 2.2rem;
	left: 10rem;
	cursor: pointer;
`;

const CardContainer = styled.div`
	width: 50rem;
	height: 20rem;
	position: relative;
	top: 25vh;
	left: calc(50vw - 25rem);
	display: grid;
	grid-template-columns: repeat(4, 1fr);
	grid-gap: 1fr;
`;

const Card = styled.div`
	width: 12rem;
	height: 15rem;
	background-color: yellow;
	margin: 2.5rem auto;
	border-radius: 20px;
`;
