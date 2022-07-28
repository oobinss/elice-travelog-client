import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import { BsPencilFill } from 'react-icons/bs';
import { useRecoilState } from 'recoil';
import {
	bookmarkState,
	bookmarkListState,
	textState,
	listNumberState,
	bookmarkSetState,
} from '../../../recoil/Atom';
function SetComments(props) {
	const [value, setValue] = useState('');
	const [bookmark, setBookmark] = useRecoilState(bookmarkState);
	const [bookmarkSet, setBookmarkSet] = useRecoilState(bookmarkSetState);
	const [bmList, setBmList] = useRecoilState(bookmarkListState);
	const [listNumber, setListNumber] = useRecoilState(listNumberState);

	const inputRef = useRef();
	const buttonRef = useRef();
	const pRef = useRef();

	const newObject = bookmark.map(element => {
		let newObj = {
			placeName: element.place_name,
			placeUrl: element.place_url,
			categoryName: element.category_name,
			addressName: element.address_name,
			roadAddressName: element.road_address_name,
			bookmarkId: element.id,
			phone: element.phone,
			categoryGroupCode: element.category_group_code,
			categoryGroupName: element.category_group_name,
			x: element.x,
			y: element.y,
		};
		return newObj;
	});

	function handleForm(e) {
		if (inputRef.current.type === 'text') {
			inputRef.current.type = 'hidden';
			buttonRef.current.style.display = 'none';
			pRef.current.style.display = 'inline-block';
		} else {
			inputRef.current.type = 'text';
			buttonRef.current.style.display = 'inline';
			pRef.current.style.display = 'none';
		}
	}

	function handleBtn(e) {
		// input의 value를 특정 배열 내 객체의 프로퍼티에 넣는 작업
		e.preventDefault();
		props.setComment([...props.comment, { id: props.i, bookmarkMemo: value }]);
		console.log(props.comment);
		inputRef.current.type = 'hidden';
		buttonRef.current.style.display = 'none';
		pRef.current.style.display = 'inline-block';
		pRef.current.style.width = '12rem';
	}

	function handleChange(e) {
		e.preventDefault();
		setValue(e.target.value);
	}
	return (
		<SetCommentsStyle>
			<BsPencilFill className="addComments" onClick={handleForm} color="#5f6caf" />
			<div className="makeFlex">
				<input
					type="hidden"
					onChange={handleChange}
					ref={inputRef}
					value={value}
					placeholder="메모를 등록해 주세요."
				/>
				<p ref={pRef}>{value}</p>
				<button onClick={handleBtn} ref={buttonRef}>
					등록
				</button>
			</div>
		</SetCommentsStyle>
	);
}

export default SetComments;

const SetCommentsStyle = styled.div`
	button {
		display: none;
		color: white;
		background-color: #5f6caf;
		border: none;
		font-size: 0.75rem;
	}

	input {
		background-color: #edf7fa;
		margin-left: 0.1rem;
		height: 1.5rem;
	}

	input:focus {
		outline: none;
	}

	.makeFlex {
		width: 4rem;
		height: 1.5rem;
	}

	.addComments {
		float: right;
		font-size: 1rem;
	}
`;
