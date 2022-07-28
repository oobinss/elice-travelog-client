import React from 'react';
import styled from 'styled-components';

function EditModal(props) {
	return (
		<EditModalStyle>
			<button className="editListBtn">수정하기</button>
			<button className="deleteListBtn">삭제하기</button>
		</EditModalStyle>
	);
}

export default EditModal;

const EditModalStyle = styled.div`
	position: absolute;
	width: 10rem;
	height: 10rem;
	background-color: white;
`;
