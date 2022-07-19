import React, { useState } from 'react';
import styled from 'styled-components';
import { ImSearch } from 'react-icons/im';

function SearchbarIntro() {
	const [inputValue, setInputValue] = useState('');
	return (
		<SearchBarContainer>
			<SearchBarTitle>어디로 떠나세요?</SearchBarTitle>
			<SearchBarInput
				value={inputValue}
				onChange={e => {
					setInputValue(e.target.value);
				}}
			/>
			<Search
				onClick={() => {
					window.location.href = `/main?place=${inputValue}`;
				}}
			/>
		</SearchBarContainer>
	);
}

const SearchBarContainer = styled.div`
	width: 50rem;
	height: 9rem;
	background-color: #edf7fa;
	border-radius: 20px;
	box-shadow: 7px 7px 4px rgba(0, 0, 0, 0.25);
	position: relative;
	top: 20vh;
	left: calc(50vw - 25rem);
`;
const SearchBarTitle = styled.p`
	text-align: center;
	font-size: 1.5rem;
	padding-top: 1.5rem;
`;

const SearchBarInput = styled.input`
	width: 30rem;
	height: 1.7rem;
	position: relative;
	top: 2rem;
	left: 9rem;
	border: none;
	border-radius: 10px;
`;
const Search = styled(ImSearch)`
	position: relative;
	top: 2.2rem;
	left: 10rem;
	cursor: pointer;
`;

export default SearchbarIntro;
