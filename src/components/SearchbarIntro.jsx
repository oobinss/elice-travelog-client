import React from 'react';
import styled from 'styled-components';
import { ImSearch } from 'react-icons/im';
import { NavLink } from 'react-router-dom';

function SearchbarIntro({
	containerWidth,
	containerHeight,
	inputWidth,
	titlePadding,
	title,
	value,
	visibleOption,
	changeMethod,
	clickMethod,
	inputLeft,
	clickurl,
	inputTop,
	searchTop,
}) {
	return (
		<SearchBarContainer
			style={{
				width: containerWidth,
				height: containerHeight,
				left: `calc(50vw - ${containerWidth}/2)`,
				top: containerHeight,
			}}
		>
			<SearchBarTitle style={{ paddingTop: titlePadding }}>{title}</SearchBarTitle>
			<SearchBarInput
				style={{ width: inputWidth, left: inputLeft, top: inputTop }}
				value={value}
				onChange={changeMethod}
			/>
			<Search onClick={clickMethod} style={{ left: inputLeft, top: searchTop }} />
			<Writing style={{ visibility: visibleOption }} to={`/${clickurl}`}>
				글쓰기
			</Writing>
		</SearchBarContainer>
	);
}

const SearchBarContainer = styled.div`
	height: 9rem;
	background-color: #fff;
	border-radius: 20px;
	box-shadow: 1px 1px 15px 1px rgba(0, 0, 0, 0.25);
	position: relative;
	top: 20vh;
	left: calc(50vw - 25rem);
`;
const SearchBarTitle = styled.p`
	text-align: center;
	font-size: 1.5rem;
	padding-top: 1.5rem;
	cursor: default;
`;

const SearchBarInput = styled.input`
	height: 1.7rem;
	position: relative;
	border: 1px solid #ddd;
	top: 2rem;
	left: 9rem;
	border-radius: 10px;
	padding: 0 1rem;
`;
const Search = styled(ImSearch)`
	position: relative;
	padding-left: 1rem;
	top: 2.2rem;
	left: 10rem;
	cursor: pointer;
	&:hover {
		transform: scale(110%);
	}
`;
const Writing = styled(NavLink)`
	visibility: hidden;
	display: block;
	width: 5rem;
	height: 3rem;
	background-color: #5f6caf;
	text-align: center;
	line-height: 3rem;
	color: #fff;
	border: none;
	border-radius: 15px;
	position: absolute;
	top: 1rem;
	left: 38rem;
`;

export default SearchbarIntro;
