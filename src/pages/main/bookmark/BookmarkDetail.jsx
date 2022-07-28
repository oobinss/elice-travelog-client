import React, { useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { MdArrowBackIos, MdStars } from 'react-icons/md';
import { useRecoilState } from 'recoil';
import {
	bookmarkState,
	bookmarkSetState,
	bookmarkListState,
	listNumberState,
	viewDetailState,
	textState,
} from '../../../recoil/Atom';
import BookmarkInfoDetail from './BookmarkInfoDetail';
function BookmarkDetail() {
	const [bookmark, setBookmark] = useRecoilState(bookmarkState);
	const [bookmarkSet, setBookmarkSet] = useRecoilState(bookmarkSetState);
	const [bmList, setBmList] = useRecoilState(bookmarkListState);
	const [listNumber, setListNumber] = useRecoilState(listNumberState);
	const [viewDetail, setViewDetail] = useRecoilState(viewDetailState);
	const [text, setText] = useRecoilState(textState);

	async function sendToWriting() {
		console.log(bookmarkSet);
		const token = localStorage.getItem('token');
		await axios({ 
			method: 'post', 
			url: 'http://localhost:8000/api/bookmarks/registers', 
			headers: { 
				Authorization: `Bearer ${token}`,
			},
			data: bookmarkSet, 
		})
		.then((res) => {
			console.log(res.status);
			console.log(res.data)
		})
		.catch((err) => console.log(err.toJSON()))
	}

	return (
		<DetailPageStyle>
			<div className="folder">
				<MdStars color="#ffb877" id="btnStar" size="32" />
				{bmList[listNumber]}
				<MdArrowBackIos className="backBtn" onClick={() => setViewDetail(true)} />
			</div>
			<div className="content">
				{<BookmarkInfoDetail />}
			</div>
			<button className="redirectTowrite" onClick={sendToWriting}>
				글쓰기
			</button>
		</DetailPageStyle>
	);
}


const DetailPageStyle = styled.div`
	display: flex;
	flex-flow: column;
	justify-content: flex-start;
	margin: auto;

	.folder {
		display: flex;
		justify-content: center;
		height: 3rem;
		font-size: 1.2rem;
		text-align: center;
		background-color: white;
		border-radius: 0.5rem;
	}
	.content {
		width: 18rem;
		height: 70vh;
		margin: 1rem 0;
		text-align: center;
		overflow: scroll;
		overflow-y: auto;
		overflow-x: hidden;
		background-color: white;
		&::-webkit-scrollbar {
			width: 4px;
		}
		&::-webkit-scrollbar-thumb {
			border-radius: 2px;
			background: #ccc;
		}
	}

	#btnStar {
		padding: 0.5rem 1rem 0 1rem;
	}
	.backBtn {
		padding: 0.8rem 0 0 4rem;
		cursor: pointer;
	}

	.bookmarkBox {
		margin-left: 1.3rem;
		font-size: 1rem;
	}

	.infoBox {
		width: 15rem;
		height: 8rem;
		font-size: 2rem;
		background-color: white;
		border: none;
		border-radius: 1rem;
		margin: 1rem auto;
		padding: 1rem;
		line-height: 2rem;
	}

	.redirectTowrite {
		height: 2rem;
		border: none;
		border-radius: 0.5rem;
		background-color: #5f6caf;
		color: white;
	}
`;

export default BookmarkDetail;
