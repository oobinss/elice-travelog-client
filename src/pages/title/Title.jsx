import React, { useState } from 'react';
import styled from 'styled-components';
import TitleCard from '../../components/TitleCard';
import videoBG from './video/background.mp4';
import SearchbarIntro from '../../components/SearchbarIntro';
import { useRecoilValue } from 'recoil';
import { loginState } from '../../recoil/Atom';
import { NavLink, useNavigate } from 'react-router-dom';

function Title() {
	const isLoggedIn = useRecoilValue(loginState);
	const [inputValue, setInputValue] = useState('');
	const navigate = useNavigate();
	const scrolling = () => {
		const viewHight = window.innerHeight;
		window.scrollTo({
			top: viewHight,
			left: 0,
			behavior: 'smooth',
		});
	};
	const titleData = [
		{
			id: 1,
			place: '제주',
			img: 'https://cdn.pixabay.com/photo/2021/02/12/13/27/spring-6008564_1280.jpg',
		},
		{
			id: 2,
			place: '부산',
			img: 'https://cdn.pixabay.com/photo/2020/05/05/11/57/sea-5132777_1280.jpg',
		},
		{
			id: 3,
			place: '보성',
			img: 'https://cdn.pixabay.com/photo/2018/03/21/22/26/valley-3248525_1280.jpg',
		},
		{
			id: 4,
			place: '서울',
			img: 'https://cdn.pixabay.com/photo/2016/11/02/14/32/lotte-world-tower-1791802_1280.jpg',
		},
	];
	const clickSearch = () => {
		navigate(`/main?place=${inputValue}`);
	};
	const inputSearch = e => {
		setInputValue(e.target.value);
	};

	return (
		<div>
			<TitleContainer>
				<TitleSection>
					<Img src="img/travelog.jpg" />
					<TitleButton onClick={scrolling}>시작하기</TitleButton>
				</TitleSection>
				<VideoContainer>
					<Video src={videoBG} autoPlay loop muted />
				</VideoContainer>
				<MenuUl>
					<MenuLi>
						<NavLink to="/community">community</NavLink>
					</MenuLi>
					<MenuLi>
						<NavLink to={isLoggedIn ? '/mypage' : '/login'}>
							{isLoggedIn ? 'my page' : 'login'}
						</NavLink>
					</MenuLi>
				</MenuUl>
			</TitleContainer>
			<SearchSection>
				<SearchbarIntro
					title="어디로 떠나세요?"
					inputWidth="30rem"
					containerWidth="50rem"
					value={inputValue}
					clickMethod={clickSearch}
					changeMethod={inputSearch}
				/>
				<CardContainer>
					{titleData.map(i => {
						return <TitleCard key={`Title-card-${i.id}`} place={i.place} img={i.img} />;
					})}
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
const TitleButton = styled.button`
	display: block;
	width: 10rem;
	height: 4rem;
	background-color: #5f6caf;
	color: #fff;
	font-size: 1.5rem;
	font-weight: 400;
	text-align: center;
	line-height: 4rem;
	border: none;
	border-radius: 22px;
	position: relative;
	top: 40vh;
	left: calc(17.5vw - 5rem);
	cursor: pointer;
`;

const VideoContainer = styled.section`
	width: 65vw;
	height: 100vh;
	overflow: hidden;
`;
const Video = styled.video`
	width: 120%;
	height: 105%;
	object-fit: cover;
	position: relative;
	top: -0.2rem;
`;
const MenuUl = styled.ul`
	display: flex;
	position: absolute;
	width: 15rem;
	text-align: center;
	top: 1rem;
	right: 1rem;
`;
const MenuLi = styled.li`
	height: 3rem;
	width: 10rem;
	font-size: 1.25rem;
	line-height: 3rem;
	color: #fff;
`;
const SearchSection = styled.section`
	width: 100vw;
	height: 100vh;
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

const Img = styled.img`
	width: 15rem;
	height: 7rem;
	position: relative;
	top: 35vh;
	left: calc(17.5vw - 7.5rem);
`;
