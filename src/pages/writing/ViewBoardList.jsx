import React from 'react';
import styled, { keyframes } from 'styled-components';
import { BiRestaurant } from 'react-icons/bi';
import { ImLibrary } from 'react-icons/im';
import { IoMdCafe } from 'react-icons/io';

const Moving = keyframes`
  0%{
    transform: rotate( 0deg );
  }
  25%{
    transform: rotate( 20deg );
  }
  50%{
    transform: rotate( -20deg );
  }
  75%{
    transform: rotate( 20deg );
  }
  100%{
    transform: rotate( 0deg );
  }
`;
const IconBox = styled.div``;
const ListBox = styled.div`
	padding: 1rem;
	margin: 1rem;
	width: 2rem;
	min-height: 15rem;
	position: relative;
	border-radius: 8px;
	background-color: #fff;
	display: flex;
	box-shadow: rgb(31 38 135 / 20%) 0px 8px 32px 0px;
	flex-direction: column;
	justify-content: flex-start;
	align-items: center;
	gap: 1rem;
	.icon {
		width: 2rem;
		height: 2rem;
	}
	&:hover ${IconBox} {
		animation: ${Moving} 0.2s linear;
	}
`;

const LinkToURL = styled.a`
	display: flex;
	flex-direction: column;
	align-items: center;
	cursor: pointer;
`;
const ListHeader = styled.h2`
	font-size: 1.2rem;
	text-align: center;
`;

function ViewBoardList({ placeName, placeUrl, categoryGroupName }) {
	let category;
	switch (categoryGroupName) {
		case '카페':
			category = <IoMdCafe className="icon" />;
			break;
		case '음식점':
			category = <BiRestaurant className="icon" />;
			break;
		default:
			category = <ImLibrary className="icon" />;
	}
	return (
		<LinkToURL href={placeUrl} target="_blank">
			<ListBox>
				<IconBox>{category}</IconBox>
				<ListHeader>{placeName.split(' ')[0]}</ListHeader>
			</ListBox>
		</LinkToURL>
	);
}

export default ViewBoardList;
