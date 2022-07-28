import overlayContents from './overlayContents';

const { kakao } = window;

export default function searchMap(kakaoMap, place, setPlaceInfo, searchOptions) {
	const places = new kakao.maps.services.Places();

	places.keywordSearch(place, placesSearchCB, searchOptions);

	function placesSearchCB(data, status, pagination) {
		if (status === kakao.maps.services.Status.OK) {
			let bounds = new kakao.maps.LatLngBounds();
			for (let i = 0; i < data.length; i++) {
				let marker = new kakao.maps.Marker({
					map: kakaoMap,
					position: new kakao.maps.LatLng(data[i].y, data[i].x),
				});
				let infowindow = new kakao.maps.InfoWindow({
					zIndex: 1,
					removable: true,
				});
				kakao.maps.event.addListener(marker, 'click', function () {
					infowindow.setContent(overlayContents(data[i]));
					infowindow.open(kakaoMap, marker);
				});
				setPlaceInfo(data);
				bounds.extend(new kakao.maps.LatLng(data[i].y, data[i].x));
			}

			kakaoMap.setBounds(bounds);
		}
	}
}
