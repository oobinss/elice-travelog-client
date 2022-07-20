import React, { useState } from 'react';
import { useRecoilState } from 'recoil';
import { placeInfoState, bookmarkState } from '../recoil/Atom';
import styled from 'styled-components';

function PlaceInfo() {
	const [placeInfo] = useRecoilState(placeInfoState);
	const [bookmark, setBookmark] = useRecoilState(bookmarkState);
	const [active, setActive] = useState('false');

	function handleStyle(data) {
		if (data.category_group_code == 'AT4') {
			return { border: '2px double rgb(3, 155, 0)' };
		} else if (data.category_group_code == 'FD6') {
			return { border: '2px double rgb(0, 41, 254)' };
		} else if (data.category_group_code == 'CE7') {
			return { border: '2px double rgb(224, 88, 54)' };
		}
	}

	function handleBookmark(e) {
		if (!bookmark.includes(e.target.id)) {
			setBookmark([...bookmark, e.target.id]);
			e.currentTarget.style.cssText = 'color: rgb(255, 184, 119)';
			console.log(bookmark);
		} else {
			const id = e.target.id;
			setBookmark(bookmark.filter(e => e !== id));
			e.currentTarget.style.cssText = '';
			console.log(bookmark);
		}
	}

	function makePlaceInfo(placeInfo) {
		return placeInfo.map(data => (
			<div key={data.id} style={handleStyle(data)} className="infoBox">
				<button id={data.id} className="bookmarkBtn" onClick={handleBookmark}>
					★
				</button>
				<ul>
					<li>{data.place_name}</li>
					<li>{data.address_name}</li>
					<li>{data.phone}</li>
				</ul>
			</div>
		));
	}
	return <PlaceInfoStyle>{placeInfo !== '' ? makePlaceInfo(placeInfo) : ''}</PlaceInfoStyle>;
}
export default PlaceInfo;

const PlaceInfoStyle = styled.div`
	display: flex;
	flex-flow: column;
	width: 20rem;
	height: 90vh;
	justify-content: flex-start;
	font-size: 1rem;
	margin: auto;
	position: absolute;
	overflow: scroll;
	top: 80px;

	.infoBox {
		width: 15rem;
		height: 8rem;
		background-color: white;
		border: none;
		border-radius: 1rem;
		margin: 1rem auto;
		padding: 1rem;
		line-height: 2rem;
	}

	.bookmarkBtn {
		float: right;
		font-size: 1.5rem;
		border: none;
		color: #ddd;
		background: white;
	}
`;
