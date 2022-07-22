const mockData = [
	{
		address_name: '서울 종로구 평창동',
	},
	{ address_name: '서울 종로구 평창동' },
	{ address_name: '서울 종로구 평창동' },
	{ address_name: '서울 종로구 평창동' },
	{ address_name: '서울 종로구 평창동' },
	{ address_name: '서울 종로구 평창동' },
	{ address_name: '서울 종로구 평창동' },
	{ address_name: '강원 강릉시 저동 91' },
	{ address_name: '강원 강릉시 저동 94' },
	{ address_name: '강원 강릉시 저동 90' },
	{ address_name: '강원 강릉시 저동 98' },
	{ address_name: '강원 강릉시 저동 9ㅅ' },
	{ address_name: '부산 기장군 기장읍 시랑리 산 46' },
	{ address_name: '경기 수원시 장안구 영화동 320-2' },
];

const cityObj = {
	서울: { posts: [], color: '' },
	부산: { posts: [], color: '' },
	대구: { posts: [], color: '' },
	인천: { posts: [], color: '' },
	광주: { posts: [], color: '' },
	대전: { posts: [], color: '' },
	울산: { posts: [], color: '' },
	경기: { posts: [], color: '' },
	강원: { posts: [], color: '' },
	충북: { posts: [], color: '' },
	충남: { posts: [], color: '' },
	전북: { posts: [], color: '' },
	전남: { posts: [], color: '' },
	경북: { posts: [], color: '' },
	경남: { posts: [], color: '' },
	제주특별자치도: { posts: [], color: '' },
	세종특별자치시: { posts: [], color: '' },
};
mockData.forEach(i => {
	const cityName = i.address_name.split(' ')[0];
	cityObj[cityName].posts.push(i);
});
Object.keys(cityObj).forEach(i => {
	if (cityObj[i].posts.length === 0) {
		cityObj[i].color = '#ccc';
	} else if (cityObj[i].posts.length === 1) {
		cityObj[i].color = '#FFB677';
	} else if (cityObj[i].posts.length > 1 && cityObj[i].posts.length <= 4) {
		cityObj[i].color = '#FF9457';
	} else if (cityObj[i].posts.length > 4 && cityObj[i].posts.length < 9) {
		cityObj[i].color = '#FF8364';
	} else {
		cityObj[i].color = '#FF572D';
	}
});

export default cityObj;
