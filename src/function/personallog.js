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

const cityArr = [
  '서울',
  '부산',
  '대구',
  '인천',
  '광주',
  '대전',
  '울산',
  '경기',
  '강원',
  '충북',
  '충남',
  '전북',
  '전남',
  '경북',
  '경남',
  '제주특별자치도',
  '세종특별자치시',
];

const cityObj = {};
mockData.forEach(i => {
  const cityName = i.address_name.split(' ')[0];
  if (!cityObj[cityName]) {
    cityObj[cityName] = { posts: [], color: '' };
    cityObj[cityName].posts.push(i);
  } else if (cityObj[cityName]) {
    cityObj[cityName].posts.push(i);
  }
});

const notInData = cityArr.filter(i => !Object.keys(cityObj).includes(i));
notInData.forEach(i => (cityObj[i] = { posts: [], color: '' }));

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
