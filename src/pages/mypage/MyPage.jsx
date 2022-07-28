import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { useRecoilState } from 'recoil';
import { colorLogState } from '../../recoil/Atom';
import ColorLogPageComponents from '../../components/ColorLogPageComponents';

const MyPage = () => {
	const [usertext, setUserText] = useState('');
	const [userpost, setUserPost] = useState([]);
	const [userdata, setUserData] = useState([]);
	const [editable, setEditable] = useState(false);
	const [buttonClick, setButtonClick] = useRecoilState(colorLogState);
	useEffect(() => {
		getUserData();
	}, []);
	const getUserData = async () => {
		try {
			await axios
				.get('http://localhost:8000/api/users/user', config)
				.then(e => setUserData(e.data));
			setUserText(userdata.profileText);
			await axios
				.get('http://localhost:8000/api/posts/user', config)
				.then(e => setUserPost(e.data));
		} catch (err) {
			alert(err);
		}
	};
	const handleKeyDown = e => {
		if (e.key === 'Enter') {
			axios({
				method: 'patch',
				url: `http://localhost:8000/api/users/${userdata.id}`,
				headers: { Authorization: `Bearer ${token}` },
				data: {
					profileText: usertext,
				},
			});
			setEditable(!editable);
		}
	};
	//axios bearer token
	const token = window.localStorage.getItem('token');
	let config = {
		headers: { Authorization: `Bearer ${token}` },
	};
	const handleProfileText = () => {
		setEditable(!editable);
	};
	const handleButtonClick = () => {
		setButtonClick(true);
	};
	return (
		<Page>
			<MyPageHeader>
				<Profile>
					<ProfileHeader>
						<ProfileImg>
							<Img src="img/airport.jpg" />
							<UserName>{userdata.name}</UserName>
						</ProfileImg>

						{!editable ? (
							<ProfileInfo>{usertext} </ProfileInfo>
						) : (
							<ProfileInfo>
								<input
									type="text"
									value={usertext}
									onChange={e => {
										setUserText(e.target.value);
									}}
									onKeyDown={handleKeyDown}
								/>
							</ProfileInfo>
						)}
						<button onClick={handleProfileText}>글쓰기</button>
					</ProfileHeader>
					<MyInfo>
						<MyInfoBox>
							<p>내 여행</p>
							<MyLog>3</MyLog>
						</MyInfoBox>
						<MyInfoBox>
							<p>여행글</p>
							<MyLog>{userpost.length}</MyLog>
						</MyInfoBox>
						<MyInfoBox onClick={handleButtonClick}>
							<p>컬러로그</p>
						</MyInfoBox>
					</MyInfo>
				</Profile>
			</MyPageHeader>
			<PostMenu>
				<PostIcon src="img/posticon.png" />
				<Post>게시물</Post>
			</PostMenu>
			<Feed>
				<ImgFeed src="img/airport.jpg" />
				<ImgFeed src="img/beach.jpg" />
				<ImgFeed src="img/hamburg.jpg" />
				<ImgFeed src="img/people.jpg" />
				<ImgFeed src="img/avatar.jpg" />
				{userpost.map(post => (
					<div key={post.id}>
						<a href="www.naver.com">
							<ImgFeed src={post.mainImg} />
						</a>
					</div>
				))}
			</Feed>
			{buttonClick && <ColorLogPageComponents></ColorLogPageComponents>}
		</Page>
	);
};
export default MyPage;

const Page = styled.div`
	width: 100vw;
	position: absolute;
	left: 50%;
	transform: translateX(-50%);
	display: flex;
	flex-direction: column;
	background-color: rgb(250, 250, 250);
	align-items: center;
`;
const MyPageHeader = styled.div`
	display: flex;
	justify-content: column;
	width: 60vw;
`;

const Profile = styled.div`
	width: 100vw;
	height: 40vh;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

const PostMenu = styled.div`
	border-top: 1px solid lightgrey;
	height: 3rem;
	display: flex;
	width: 60vw;
	justify-content: center;
`;

const PostIcon = styled.img`
	width: 1rem;
	display: flex;
	align-items: center;
	height: 1rem;
	padding-top: 1rem;
	margin-right: 0.5rem;
`;
const Post = styled.p`
	height: 3rem;
	display: flex;
	align-items: center;
	font-size: 0.5rem;
`;
const ProfileHeader = styled.div`
  display: flex;
  width: 60vw;
  heigth:40vh
  justify-content: space-around;
`;
const ProfileImg = styled.div`
	display: flex;
	flex-direction: column;
	width: 40vw;
	align-items: center;
`;
const ProfileInfo = styled.section`
	display: flex;
	align-items: center;
	width: 50rem;
	justify-content: flex-start;

	& input {
		width: 100%;
		height: 100%;
	}
`;

const Img = styled.img`
	border-radius: 50%;
	width: 10rem;
	height: 10rem;
`;

const MyInfo = styled.div`
	display: flex;
	justify-content: space-evenly;
	width: 100%;
	margin-top: 4rem;
`;
const MyLog = styled.p`
	display: flex;
	width: 2rem;
	border-radius: 1rem;
	justify-content: center;
	height: 2rem;
	position: relative;
`;
const UserName = styled.p`
	font-size: 1.5rem;
	margin-top: 1.5rem;
`;
const MyInfoBox = styled.div`
	display: flex;
	justify-content: space-evenly;
	width: 20%;
	height: 5vh;
	margin-top: 1rem;
	background-color: #edf7fa;
	line-height: 5vh;
	border-radius: 1rem;
	font-size: 1rem;
	border: 1px solid grey;
`;

const Feed = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(30%, auto));
	gap: 25px 25px;
	width: 60vw;
`;

const ImgFeed = styled.img`
	width: 19vw;
	height: 32vh;
	align-items: stretch;
	box-sizing: border-box;
	object-fit: fill;
	cursor: pointer;
	&:hover {
		filter: brightness(20%);
	}
`;
