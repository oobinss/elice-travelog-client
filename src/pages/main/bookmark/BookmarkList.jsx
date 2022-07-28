import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import { MdStars } from 'react-icons/md';
import { BsPlusCircle } from 'react-icons/bs';
import { useRecoilState } from 'recoil';
import { bookmarkListState, viewDetailState, listNumberState } from '../../../recoil/Atom';
import EditBookmark from './EditBookmark';
function BookmarkList(props) {
	const [bmList, setBmList] = useRecoilState(bookmarkListState);
	const [, setViewDetail] = useRecoilState(viewDetailState);
	const [edit, setEdit] = useState(false);


	const inputRef = useRef();
	const hiddenDivRef = useRef();
	const btnRef = useRef();

	function addFolder() {
		console.log(hiddenDivRef.current);
		hiddenDivRef.current.style.display = 'flex';
		inputRef.current.value;
	}

	function viewMore(e) {
		setViewDetail(false);
		props.setGetNumber(e.target.id);
		console.log(props.getNumber);
	}

	function handleSubmit() {
		setBmList([...bmList, inputRef.current.value]);
		hiddenDivRef.current.style.display = 'none';
	}

	return (
		<BmListStyle>
			<div className="listContainer">
				<div className="folder" onClick={addFolder} id="addListBtn">
					<BsPlusCircle color="#ddd" className="btnPlus" size="26" />
					<p>새 폴더</p>
				</div>
				{bmList.map((element, i) => (
					<div key={i} className="folder" >
						<MdStars color="#ffb877" className="btnStar" size="32" />
						<p id={i} onClick={viewMore}>{element}</p>
						<EditBookmark  i={i} setEdit={setEdit} edit={edit}/>
					</div>
				))}

				<div className="hiddenDiv" ref={hiddenDivRef}>
					<input type="text" placeholder="새 리스트" ref={inputRef} />
					<button className="submitNewList" onClick={handleSubmit} ref={btnRef}>
						완료
					</button>
				</div>
			</div>
		</BmListStyle>
	);
}

const BmListStyle = styled.div`
	.btnContainer {
		display: flex;
		width: 23rem;
		height: 2rem;
		margin-bottom: 2rem;
		background-color: #fafafa;
	}

	.listContainer {
		display: flex;
		flex-flow: column;
		width: 21rem;
		height: 65vh;
		margin: 0 auto;
		background-color: white;
		border: 1px solid rgb(219,219,219);
		border-radius: 0.25rem;
	}

	.folder {
		display: flex;
		width: 100%;
		height: 4rem;
		text-align: center;
		align-items: center;
		border-radius: 0.25rem;
		font-size: 1rem;
		box-shadow: 0 2px 2px -2px rgb(0 0 0 / 20%);
	}
	.folder p {
		cursor: pointer;
		flex-basis: 17rem;
		line-height: 2rem;
	}

	#addListBtn {
		justify-content: center;
	}

	#addListBtn:active {
		background-color: #eee;
	}

	.btnPlus {
		position: absolute;
		color: rgb(255,184,119);
		padding-top: 0.1rem;
		left: 8rem;
	}

	.btnStar {
		color: rgb(255,184,119);
		padding: 0.5rem;
		position: absolute;
		left: 4rem;
	}

	.hiddenDiv {
		display: none;
		height: 4rem;
		border: none;
		justify-content: center;
	}

	.hiddenDiv input {
		width: 80%;
	}

	.hiddenDiv button {
		border: none;
		border-radius: 0.5rem;
		margin: 1px;
		background-color: #5f6caf;
		color: white;
	}

	.editBtn {
		position: absolute;
		right: 3rem;
		cursor: pointer;
		opacity: 0.5;
	}
	.editBtn:hover {
		opacity: 1;
	}
`;

export default BookmarkList;
