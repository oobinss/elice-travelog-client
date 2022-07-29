import React from 'react';
import styled from 'styled-components';
import { communityState } from '../recoil/Atom';
import { useSetRecoilState } from 'recoil';

function PostBox({ title, name, content, img, id }) {
	const setPostClick = useSetRecoilState(communityState);

	const handlePostClick = () => {
		setPostClick({ state: true, id: id });
	};
	return (
		<PostContainer onClick={handlePostClick}>
			<PostTitle>{title}</PostTitle>
			<PostImg src={img || 'img/default.png'} />
			<PostWriter>{name}</PostWriter>
			<PostContent>{content}</PostContent>
		</PostContainer>
	);
}

export default PostBox;

const PostContainer = styled.div`
	width: 45rem;
	border-radius: 22px;
	background-color: #fff;
	box-shadow: 4px 4px 15px rgba(0, 0, 0, 0.15);
	margin-bottom: 3rem;
	position: relative;
	top: 10rem;
	left: calc(50vw - 22.5rem);
	cursor: pointer;
`;
const PostTitle = styled.p`
	display: block;
	width: 30rem;

	font-size: 1.5rem;
	position: relative;
	top: 1.8rem;
	left: 4rem;
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
`;

const PostImg = styled.img`
	width: 2rem;
	height: 2rem;
	border-radius: 1rem;
	position: relative;
	left: 35rem;
`;

const PostWriter = styled.p`
	display: block;
	width: 6.5rem;
	position: relative;
	top: -1.7rem;
	left: 37.5rem;
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
`;

const PostContent = styled.p`
	display: block;
	width: 38rem;
	position: relative;
	top: 0.5rem;
	left: 4rem;
	height: 3rem;
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
`;
