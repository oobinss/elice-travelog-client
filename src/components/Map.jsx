import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useRecoilState } from 'recoil';
import { placeState, mainInputValueState } from '../recoil/Atom';

const { kakao } = window;

function Map() {
	const [place] = useRecoilState(placeState);
	const [mainInputValue] = useRecoilState(mainInputValueState);
	console.log({ mainInputValue });

	useEffect(() => {
		let infowindow = new kakao.maps.InfoWindow({ zIndex: 1 });
		const container = document.getElementById('map');
		const options = {
			center: new kakao.maps.LatLng(33.450701, 126.570667),
			level: 5,
		};
		const kakaoMap = new kakao.maps.Map(container, options);
		kakaoMap.setMaxLevel(12);

		const places = new kakao.maps.services.Places();
		const searchOptions = {
			page: 5,
		};
		places.keywordSearch(place, placesSearchCB, searchOptions);

		function placesSearchCB(data, status, pagination) {
			if (status === kakao.maps.services.Status.OK) {
				let bounds = new kakao.maps.LatLngBounds();
				console.log(data);
				for (let i = 0; i < data.length; i++) {
					displayMarker(data[i]);
					bounds.extend(new kakao.maps.LatLng(data[i].y, data[i].x));
				}

				kakaoMap.setBounds(bounds);
			}
		}

		function displayMarker(place) {
			let marker = new kakao.maps.Marker({
				map: kakaoMap,
				position: new kakao.maps.LatLng(place.y, place.x),
			});

			kakao.maps.event.addListener(marker, 'click', function () {
				infowindow.setContent(
					`<div style="padding:5px; font-size:12px; margin:auto;"> ${place.place_name} </div>`,
				);
				infowindow.open(kakaoMap, marker);
			});
		}
	}, [place]);

	return (
		<MapContainer>
			<div id="map"></div>
		</MapContainer>
	);
}

const MapContainer = styled.div`
	width: 100vw;
	height: calc(100vh - 60px);

	#map {
		height: 100%;
	}
`;

export default Map;
