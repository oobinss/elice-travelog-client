const { kakao } = window;

export default function makeMap() {
	const container = document.getElementById('map');
	const options = {
		center: new kakao.maps.LatLng(33.450701, 126.570667),
		level: 4,
	};
	const kakaoMap = new kakao.maps.Map(container, options);

	kakaoMap.setMaxLevel(12);

	return kakaoMap;
}
