import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import { BsThreeDots } from 'react-icons/bs';
import EditModal from './EditModal';
import { useRecoilState } from 'recoil';
import { listNumberState } from '../../../recoil/Atom';

function EditBookmark(props) {
	const [listNumber, setListNumber] = useRecoilState(listNumberState);
	const [select, setSelect] = useState([]);
	function editFolder() {
		setListNumber(props.i);
		console.log(props.i);
		select.includes(listNumber)
			? setSelect(select.filter(button => button !== listNumber))
			: setSelect(select => [...select, listNumber]);
	}
	return (
		<EditBtnStyle>
			<BsThreeDots className="editBtn" i={props.i} onClick={editFolder} />
			{listNumber === props.i && <EditModal />}
		</EditBtnStyle>
	);
}

const EditBtnStyle = styled.div`
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

export default EditBookmark;
