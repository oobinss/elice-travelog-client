import React from 'react';
import styled from 'styled-components';

function PostBox() {
	return (
		<PostContainer>
			<PostImg />
			<PostWriter>sojeong</PostWriter>
			<PostContent>dkdkdkdkdk</PostContent>
		</PostContainer>
	);
}

export default PostBox;

const PostContainer = styled.div`
	width: 60rem;
	height: 15rem;
	border-radius: 22px;
	background-color: #fff;
	box-shadow: 4px 4px 15px rgba(0, 0, 0, 0.15);
	position: relative;
	top: 10rem;
	left: 9.9rem;
`;

const PostImg = styled.img`
	width: 4rem;
	height: 4rem;
	border-radius: 2rem;
	background-color: black;
	position: relative;
	top: 2rem;
	left: 4rem;
`;

const PostWriter = styled.p`
	font-size: 1.5rem;
	position: relative;
	top: -1rem;
	left: 10rem;
`;

const PostContent = styled.p`
	font-size: 1.25rem;
	position: relative;
	top: 4rem;
	left: 4rem;
`;
