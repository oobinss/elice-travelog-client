import React from 'react'
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
const IconBox = styled.div`

`
const ListBox = styled.div`
	padding: 1rem;
	margin: 1.5rem;
	height: 12rem;
	position: relative;
	border-radius: 8px;
	background-color: #fff;
	display: flex;
	box-shadow: rgb(31 38 135 / 20%) 0px 8px 32px 0px !important;
	flex-direction: column;
	justify-content: center;
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
	position: relative;
	display: flex;
	flex-direction: column;
	gap: 1rem;
	align-items: center;
	cursor: pointer;
`;
const ListHeader = styled.h2`
  font-size: 1.2rem;
  text-align: center;
`

function ViewBoardList({ bookmarkId, placeName, placeUrl, bookmarkMemo }) {
  return (
		<LinkToURL href={placeUrl} target="_blank">
			<ListBox>
				<IconBox>
					<IoMdCafe className="icon" />
				</IconBox>
				<ListHeader>{placeName.split(' ')[0]}</ListHeader>
				<p>{bookmarkMemo}</p>
			</ListBox>
		</LinkToURL>
	);
}

export default ViewBoardList
