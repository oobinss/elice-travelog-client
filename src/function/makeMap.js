import overlayContents from './overlayContents';

const { kakao } = window;

export default function makeMap() {
	const container = document.getElementById('map');
	const defaultLatLng = new kakao.maps.LatLng(36.390884093020325, 127.40080871739734);
	const options = {
		center: defaultLatLng,
		level: 4,
	};
	const kakaoMap = new kakao.maps.Map(container, options);

	kakaoMap.setMaxLevel(12);

	const places = new kakao.maps.services.Places();

	places.keywordSearch('엘리스코딩', placesSearchCB);

	function placesSearchCB(data, status, pagination) {
		if (status === kakao.maps.services.Status.OK) {
			let bounds = new kakao.maps.LatLngBounds();
			displayMarker(data[0]);
			bounds.extend(defaultLatLng);
			kakaoMap.setBounds(bounds);
		}
	}

	function displayMarker(place) {
		let marker = new kakao.maps.Marker({
			map: kakaoMap,
			position: new kakao.maps.LatLng(place.y, place.x),
		});

		let infowindow = new kakao.maps.InfoWindow({
			zIndex: 1,
			removable: true,
		});

		kakao.maps.event.addListener(marker, 'click', function () {
			infowindow.setContent(overlayContents(place));
			infowindow.open(kakaoMap, marker);
		});
	}

	return kakaoMap;
}
