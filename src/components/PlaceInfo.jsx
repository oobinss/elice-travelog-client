import React from 'react';
import { useRecoilState } from 'recoil';
import { placeInfoState } from '../recoil/Atom';
import styled from 'styled-components';

function PlaceInfo() {
	const [placeInfo] = useRecoilState(placeInfoState);
	function makePlaceInfo(placeInfo) {
		return placeInfo.map(placeInfo => (
			<div className="infoBox">
				<ul>
					<li>{placeInfo.place_name}</li>
					<li>{placeInfo.phone}</li>
					<li>{placeInfo.address_name}</li>
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
	width: 16rem;
	height: 90vh;
	justify-content: flex-start;
	font-size: 1rem;
	margin: auto;

	.infoBox {
		width: 15rem;
		height: 8rem;
		background-color: white;
		border: 1px solid #5f6caf;
		border-radius: 5px;
		margin: 1rem;
	}
`;
