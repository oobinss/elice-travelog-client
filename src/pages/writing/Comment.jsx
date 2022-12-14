import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import styled, { keyframes } from 'styled-components';
import CommentList from './CommentList';
import {
	IoChatbubbleEllipsesOutline,
	IoHeartOutline,
	IoEllipsisHorizontalSharp,
	IoArrowRedoOutline,
	IoHeartSharp,
} from 'react-icons/io5';
import { useLocation } from 'react-router';
const CommentContainer = styled.div`
	display: flex;
	width: 26vw;
	height: calc(100vh - 5rem);
	flex-direction: column;
	padding-top: 1.5rem;
	gap: 2rem;
	border-left: 1px solid #e9e9e9;
	position: fixed;
	right: 0;
	margin-bottm: 5rem;
	overflow: scroll;
`;
const CommentStatus = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr 1fr;
	justify-items: center;
`;
const MovingHeart = keyframes`
  0%{
    transform: scale(0.8);
  }
  25%{
    transform: scale(0.7);
  }
  50%{
    transform: scale(0.8);
  }
  75%{
    transform: scale(1.2);
  }
  100%{
    transform: scale(1.0);
  }
`;
const CommentBtn = styled.button`
  border: none;
  background-color: #fff;
  border-top: 1px solid #e9e9e9;
  border-bottom: 1px solid #e9e9e9;
  width: 100%;
  height: 3rem;
  display: flex;
  gap: 1rem;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  &:hover {
    background-color: rgba(233, 233, 233, 0.5);
  }
    .icon{
    width: 1.5rem;
    height: 1.5rem;
    }
  .Heart {
  width: 1.5rem;
  height: 1.5rem;
  animation: ${MovingHeart} 0.3s linear ;
  }
  .redHeart {
    width: 1.5rem;
    height: 1.5rem;
    color: red;
    animation: ${MovingHeart} 0.3s linear ;
`;
const ProfileBox = styled.div`
	display: flex;
	height: 5rem;
	padding-left: 1rem;
	padding-right: 2rem;
	justify-content: space-between;
`;
const InfoBox = styled.div`
	display: flex;
	flex-direction: column;
	gap: 0.5rem;
	justify-content: center;
	padding-left: 1rem;
`;
const ProfilInfo = styled.div`
	display: flex;
	margin-bottom: 2rem;
`;
const MoreBtn = styled.button`
	border: none;
	background-color: #fff;
	cursor: pointer;
	height: 1rem;
`;
const UserName = styled.h2`
	font-weight: bold;
`;
const DateNTime = styled.span`
	font-size: 0.8rem;
	color: #808080;
`;
const ProfileImgBox = styled.button`
	width: 3.5rem;
	height: 3.5rem;
	border-radius: 2rem;
	border: none;
	position: relative;
	color: #fff;
	text-align: center;
	align-items: center;
`;
const ProfileImg = styled.img`
	width: 3.5rem;
	height: 3.5rem;
	border-radius: 2rem;
	position: absolute;
	top: 0;
	left: 0;
	&:hover {
		filter: brightness(110%);
	}
`;
const Like = styled.p`
	padding-left: 2.3rem;
`;
const CommentFormBox = styled.div`
	padding: 1rem 1rem 3rem 1rem;
	border-radius: 12px;
`;
const CommentForm = styled.form`
	display: grid;
	grid-template-columns: 1fr;
	position: relative;
`;
const CommentInput = styled.input`
	border-radius: 12px;
	height: 2rem;
`;
const CommentSubmitBtn = styled.button`
	border: red;
	border-radius: 0 12px 12px 0;
	padding: 0.5rem;
	background-color: #fff;
	color: #5f6caf;
	position: absolute;
	font-weight: bold;
	width: 3rem;
	top: 50%;
	left: 90%;
	transform: translate(-50%, -50%);
	cursor: pointer;
`;

function Comment({ nickname, profileImg, createAt }) {
	let date = new Date(createAt);
	let year = date.getFullYear();
	let month = ('0' + (1 + date.getMonth())).slice(-2);
	let day = ('0' + date.getDate()).slice(-2);
	var hours = ('0' + date.getHours()).slice(-2);
	var minutes = ('0' + date.getMinutes()).slice(-2);
	const created = `${year}??? ${month}??? ${day}??? ${hours}??? ${minutes}???`;
	const [commentData, setCommentData] = useState([]);
	//axios bearer token
	const token = window.localStorage.getItem('token');
	let config = {
		headers: { Authorization: `Bearer ${token}` },
	};
	const location = useLocation(); // location.search ????????? / ?????? ?????? ?????????
	const queryArray = location.pathname.split('/'); // ?????? url decode ????????? = ???????????? ????????? ????????? // ?????? ?????? ??? ???????????? ?????? ????????? ?????????
	const params = queryArray[2]; // ?????? url decode ????????? = ???????????? ????????? ????????? // ?????? ?????? ??? ???????????? ?????? ????????? ?????????

	const getCommnetData = async () => {
		try {
			await axios
				.get(`http://kdt-sw2-busan-team01.elicecoding.com:5000/api/comments/${params}`, config)
				.then(res => {
					setCommentData(res.data);
				});
		} catch (err) {
			console.log(err);
		}
	};
	useEffect(() => {
		getCommnetData();
	}, []);
	const inputRef = useRef();
	const [value, setValue] = useState('');
	const [heart, setHeart] = useState(false);
	const [isValid, setIsValid] = useState(false);
	const handleHeart = () => {
		setHeart(!heart);
	};
	// ?????? ??????
	const handleComent = () => {
		inputRef.current.focus();
	};
	// ???????????? ?????? ???????????? ?????? value??? ????????????
	const getValue = e => {
		setValue(e.target.value);
		if (e.target.value) {
			setIsValid(true);
		}
	};
	//?????? ????????? ??????
	const [randomId, setRandomId] = useState(0);
	useEffect(() => {
		setRandomId(new Date().getTime());
	}, [value]);
	// ?????????????????? ???????????? ?????? commentList??? ?????? ????????? ?????? & ?????? ?????????
	const addComment = async e => {
		const addCommnetData = async () => {
			await axios
				.post(
					`http://kdt-sw2-busan-team01.elicecoding.com:5000/api/comments/register/${params}`,
					{
						id: randomId,
						content: value,
						like: 0,
						createAt: new Date(),
						postId: 32,
					},
					config,
				)
				.then(res => {
					console.log(res);
				})
				.catch(function (err) {
					console.log(err);
				});
		};
		e.preventDefault();
		inputRef.current.value = '';
		await addCommnetData();
		setValue('');
		setIsValid(false);
		await getCommnetData();
	};
	let heartStatus = heart ? (
		<IoHeartSharp heart={heart} className="redHeart" />
	) : (
		<IoHeartOutline heart={heart} className="Heart" />
	);
	return (
		<CommentContainer>
			<ProfileBox>
				<ProfilInfo>
					<ProfileImgBox>
						<ProfileImg src={profileImg ? profileImg : 'img/default.png'}></ProfileImg>
					</ProfileImgBox>
					<InfoBox>
						<UserName>{nickname}</UserName>
						<DateNTime>{created}</DateNTime>
					</InfoBox>
				</ProfilInfo>
				<MoreBtn>
					<IoEllipsisHorizontalSharp></IoEllipsisHorizontalSharp>
				</MoreBtn>
			</ProfileBox>
			<Like>????????? {heart ? 1 : 0}???</Like>
			<CommentStatus>
				<CommentBtn onClick={handleHeart}>
					{heartStatus}
					<p>LIKE</p>
				</CommentBtn>
				<CommentBtn onClick={handleComent}>
					<IoChatbubbleEllipsesOutline className="icon" />
					<p>COMMNET</p>
				</CommentBtn>
				<CommentBtn>
					<IoArrowRedoOutline className="icon" />
					<p>SHARE</p>
				</CommentBtn>
			</CommentStatus>
			{commentData.map(e => {
				return (
					<CommentList
						id={e.id}
						content={e.content}
						createAt={e.createAt}
						like={e.like}
						userName={e.User.nickname}
						userprofile={e.User.profileImg}
					/>
				);
			})}
			<CommentFormBox>
				<CommentForm onSubmit={addComment}>
					<CommentInput ref={inputRef} onChange={getValue} type="text" />
					<CommentSubmitBtn disabled={isValid ? false : true}>??????</CommentSubmitBtn>
				</CommentForm>
			</CommentFormBox>
		</CommentContainer>
	);
}

export default Comment;
