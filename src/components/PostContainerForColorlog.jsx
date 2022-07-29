import React from 'react';
import styled from 'styled-components';
import ColorLogPost from './ColorLogPost';

function PostContainerForColorlog({ data }) {
	const parsedTags = JSON.parse(data.posts[0].tag);

	return (
		<PostContainer>
			{data &&
				data.posts.map((i, idx) => (
					<ColorLogPost key={idx} id={i.id} mainImg={i.mainImg} title={i.title} tag={parsedTags} />
				))}
		</PostContainer>
	);
}

export default PostContainerForColorlog;

const PostContainer = styled.section`
	width: 20rem;
	height: 30rem;
	border-radius: 22px;
	background-color: #fff;
	box-shadow: 4px 4px 15px rgba(0, 0, 0, 0.15);
	position: absolute;
	top: 5rem;
	left: 27rem;
	overflow: scroll;
	overflow-x: hidden;
	&::-webkit-scrollbar {
		display: none;
	}
`;
