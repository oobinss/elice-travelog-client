import React from 'react';
import styled from 'styled-components';
import { useRecoilState } from 'recoil';
import { tagState } from '../../recoil/Atom.jsx';

const Tag = styled.button`
	height: 2rem;
	background-color: #fafafa;
	color: #5f6caf;
	cursor: pointer;
	border-radius: 1rem;
	border: 0;
	font-weight: bold;
	font-size: 1rem;
`;
function TagBtn({ id, tag }) {
	const [tagList, setTagList] = useRecoilState(tagState);
	const handleBtn = e => {
		setTagList(tagList.filter(e => e.id !== id));
	};
	return <Tag onClick={handleBtn}>{tag}</Tag>;
}

export default TagBtn;
