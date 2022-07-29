import React from 'react';
import styled from 'styled-components';

const Btn = styled.button`
	height: 2.5rem;
	background-color: #5f6caf;
	color: #fff;
	cursor: pointer;
	border-radius: 1rem;
	border: 0;
	font-weight: bold;
	font-size: 1.2rem;
`;

function CityTag({ changeCateTag, changeToggle, city }) {
	const handle = e => {
		changeCateTag();
		changeToggle();
	};
	return <Btn onClick={handle}>{city}</Btn>;
}

export default CityTag;
