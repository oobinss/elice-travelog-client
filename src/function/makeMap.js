const { kakao } = window

export default function makeMap() {
  const container = document.getElementById('map')
  const defaultLatLng = new kakao.maps.LatLng(36.390884093020325, 127.40080871739734)
  const options = {
    center: defaultLatLng,
    level: 4,
  }
  const kakaoMap = new kakao.maps.Map(container, options)
  kakaoMap.setMaxLevel(12)

  return kakaoMap
}
