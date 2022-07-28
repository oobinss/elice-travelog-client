import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import handleStyle from '../../../function/handleStyle';
import { AiFillCloseCircle } from 'react-icons/ai';
import { useRecoilState } from 'recoil';
import { placeInfoState, bookmarkState, activeState, detailInfoState } from '../../../recoil/Atom';
import SetComments from './SetComments';

function BookmarkInfoDetail({ width, height }) {
	const [placeInfo, setPlaceInfo] = useRecoilState(placeInfoState);
	const [bookmark, setBookmark] = useRecoilState(bookmarkState);
	const [, setActive] = useRecoilState(activeState);
	const [detailInfo, setDetailInfo] = useRecoilState(detailInfoState);

	function handleBookmark(e) {
		// 북마크에 장소 삭제
		const id = e.target.id;
		setBookmark(bookmark.filter(data => data.id !== id));	
	}

	function ActivateExtend(e) {
		setActive(true);
		setDetailInfo(placeInfo[e.target.id]);
	}

	function makeBookmarkInfoDetail(bookmark) {
		return bookmark.map((data, i) => (
			<div key={i} id={data.id} style={handleStyle(data)} className="bookmarkBox">
				<button id={data.id} className="deleteBtn" onClick={handleBookmark}>
				<AiFillCloseCircle className='circleX' color='#5f6caf'/>
				</button>
				<div onClick={ActivateExtend} style={{ color: '#5f6caf', cursor: 'pointer' }}>
					<span id={i}>{data.place_name}</span>
				</div>
				<SetComments number={i} />
			</div>
		));
	}
	return <BookmarkInfoDetailStyle>{makeBookmarkInfoDetail(bookmark)}</BookmarkInfoDetailStyle>;
}
export default BookmarkInfoDetail;

const BookmarkInfoDetailStyle = styled.div`
	display: flex;
	flex-flow: column;
	width: 30rem;
	height: 75vh;
	justify-content: flex-start;
	font-size: 0.5rem;
	margin: auto;
	overflow: scroll;

	overflow-y: auto;
	overflow-x: none;
	&::-webkit-scrollbar {
		width: 4px;
	}
	&::-webkit-scrollbar-thumb {
		border-radius: 2px;
		background: #ccc;
	}

	.bookmarkBox {
		width: 15rem;
		height: 8rem;
		background-color: white;
		border: none;
		border-radius: 1rem;
		margin: 0.5rem 0;
		line-height: 1.5rem;
	}

	.deleteBtn {
		float: right;
		font-size: 1rem;
		border: none;
		background-color: transparent;
	}
`;
