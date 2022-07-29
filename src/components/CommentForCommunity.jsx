import React from 'react';
import styled from 'styled-components';

function CommentForCommunity({ user, img, comment }) {
	return (
		<CommentBox>
			<CommentImg src={img} />
			<CommentWriter>{user}</CommentWriter>
			<Comment>{comment}</Comment>
		</CommentBox>
	);
}

export default CommentForCommunity;

const CommentBox = styled.div`
	width: 20rem;
	height: 5rem;
	margin: 0 auto 1.3rem;
	border-bottom: 1px solid #ccc;
`;
const CommentImg = styled.img`
	width: 2rem;
	height: 2rem;
	border-radius: 1rem;
	position: relative;
	top: 1rem;
	left: 0.5rem;
`;
const CommentWriter = styled.p`
	display: block;
	width: 5rem;
	position: relative;
	top: 1rem;
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
`;
const Comment = styled.p`
	display: block;
	width: 13rem;
	position: relative;
	top: -2rem;
	left: 6.5rem;
	height: 3rem;
	white-space: normal;
	word-break: break-all;
	text-overflow: clip;
`;
