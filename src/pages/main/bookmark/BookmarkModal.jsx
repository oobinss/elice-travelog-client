import React, { useEffect } from 'react';
import BookmarkInfo from './BookmarkInfo';
import MessageBox from '../../../components/MessageBox';
import { BsFillStarFill } from 'react-icons/bs';
import { MdOutlineClose } from 'react-icons/md';
import styled from 'styled-components';
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import {
	bookmarkState,
	bookmarkListState,
	bookmarkSetState,
	addBookmarkState,
	showBmListState,
} from '../../../recoil/Atom';

export default function BookmarkModal() {
	const bookmark = useRecoilValue(bookmarkState);
	const [addBookmark, setAddBookmark] = useRecoilState(addBookmarkState);
	const setShowBmList = useSetRecoilState(showBmListState);

	function handleMakeBookmark() {
		bookmark !== [] ? (
			setShowBmList(true)
		) : (
			<MessageBox message="북마크를 추가해주세요." top="50vh" left="50vw" />
		);
	}

	return (
		<BmModalStyle>
			<div className="title">
				<BsFillStarFill className="staricon" color="#ffb877" />
				북마크
			</div>
			<div id="x" onClick={() => setAddBookmark(!addBookmark)}>
				<MdOutlineClose color="#5f6caf" />
			</div>
			<BookmarkInfo />
			<button className="makeBookmark" onClick={handleMakeBookmark}>
				여정 만들기
			</button>
		</BmModalStyle>
	);
}

const BmModalStyle = styled.div`
	position: absolute;
	top: 1rem;
	left: 83vw;
	background-color: rgba(255, 255, 255, 0.8);
	border-radius: 4px;
	display: flex;
	flex-flow: column;
	width: 20rem;
	height: 50rem;
	text-align: center;

	.title {
		display: flex;
		justify-content: center;
		padding-right: 0.5rem;
	}

	.staricon {
		padding: 10px 5px 0 0;
	}

	#x {
		position: absolute;
		right: 0;
		margin: 2px;
		text-align: end;
		height: 1rem;
		line-height: 1rem;
		transform: scale(0.8);
	}

	.redirect {
		justify-self: center;
	}

	.makeBookmark {
		border: none;
		width: 10rem;
		height: 2rem;
		margin: 0.5rem auto;
		background-color: #5f6caf;
		color: white;
		border-radius: 0.5rem;
	}

	.makeBookmark:hover {
		border: none;
		width: 10rem;
		height: 2rem;
		margin: 0.5rem auto;
		background-color: #5f6caf;
		color: white;
		border-radius: 0.5rem;
		filter: brightness(1.2);
		transform: scale(1.05);
		transition: 0.1s ease-in-out;
	}

	.makeBookmark:active {
		border: none;
		width: 10rem;
		height: 2rem;
		margin: 0.5rem auto;
		background-color: #5f6caf;
		color: white;
		border-radius: 0.5rem;
		transform: scale(0.9);
		filter: brightness(0.9);
	}
`;
