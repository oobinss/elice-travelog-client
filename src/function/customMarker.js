const { kakao } = window;

export default function customMarker(kakaoMap) {
	const marker = new kakao.maps.Marker({
		position: kakaoMap.getCenter(),
	});

	let infowindow = new kakao.maps.InfoWindow({
		zIndex: 1,
		removable: true,
	});
	const geocoder = new kakao.maps.services.Geocoder();

	kakao.maps.event.addListener(kakaoMap, 'click', function (mouseEvent) {
		searchDetailAddrFromCoords(mouseEvent.latLng, function (result, status) {
			if (status === kakao.maps.services.Status.OK) {
				geocoder.addressSearch(result[0].address.address_name);
				let detailAddr = !!result[0].road_address
					? `<div>${result[0].road_address.building_name}</div>`
					: '';
				detailAddr += `<div>${result[0].address.address_name}</div>`;

				let content = `<div class="infoWindow">
                                    ${detailAddr} 
                                </div>`;
				marker.setPosition(mouseEvent.latLng);
				marker.setMap(kakaoMap);

				infowindow.setContent(content);
				infowindow.open(kakaoMap, marker);
			}
		});
	});

	function searchDetailAddrFromCoords(coords, callback) {
		geocoder.coord2Address(coords.getLng(), coords.getLat(), callback);
	}
}
