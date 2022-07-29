import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import { debounce } from 'lodash';
import { BsPencilFill } from 'react-icons/bs';
import { useRecoilState } from 'recoil';
import { textState } from '../../../recoil/Atom';
function SetComments(props) {
	const [value, setValue] = useState('');
	const [text, setText] = useRecoilState(textState);

	const inputRef = useRef();
	const buttonRef = useRef();
	const pRef = useRef();

	function handleForm() {
		inputRef.current.type = 'display';
		buttonRef.current.style.display = 'block';
	}

	function handleBtn() {
		// input의 value 새로운 객체에 넣는 작업
		setText({ ...text, [props.i]: value });
		props.setComment(value);
		console.log(props.comment);
		inputRef.current.type = 'hidden';
		buttonRef.current.style.display = 'none';
	}

	const handleChange = debounce((e) => {
		setValue(e.target.value);
	}, 500);
	
	return (
		<SetCommentsStyle>
			<BsPencilFill className="addComments" onClick={handleForm} color="#5f6caf" />
			<div className="makeFlex">
				<input
					type="hidden"
					id={props.i}
					onChange={handleChange}
					ref={inputRef}
					placeholder="메모를 등록해 주세요."
				/>
				<button onClick={handleBtn} ref={buttonRef}>
					등록
				</button>
				<p className="viewMemo" ref={pRef}></p>
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

	.viewMemo {
		width: 12rem;
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
