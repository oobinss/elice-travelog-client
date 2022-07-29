import React from 'react';
import styled from 'styled-components';
import { BiRestaurant } from 'react-icons/bi';
import { ImLibrary } from 'react-icons/im';
import { IoMdCafe } from 'react-icons/io';

function RouteBox({ category, name, url }) {
	const clickHandler = () => {
		window.location.href = url;
	};

	let categoryIcon;
	switch (category) {
		case '카페':
			categoryIcon = <IoMdCafe className="icon" />;
			break;
		case '음식점':
			categoryIcon = <BiRestaurant className="icon" />;
			break;
		default:
			categoryIcon = <ImLibrary className="icon" />;
	}

	return (
		<RouteContainer onClick={clickHandler}>
			{categoryIcon}
			<PlaceTitle>{name}</PlaceTitle>
		</RouteContainer>
	);
}

export default RouteBox;

const RouteContainer = styled.div`
	width: 7rem;
	height: 7rem;
	margin: 1rem 1rem;
	box-shadow: 1px 1px 15px 1px rgba(0, 0, 0, 0.1);
	flex: 0 0 auto;
	border-radius: 22px;
	overflow: hidden;
	cursor: pointer;
	.icon {
		width: 2rem;
		height: 2rem;
		margin: 0.5rem 2.5rem;
	}
	&:hover {
		.icon {
			transform: rotateZ(10deg);
		}
	}
`;
const PlaceTitle = styled.p`
	width: 5rem;
	margin: 0.3rem auto;
	text-align: center;
`;
