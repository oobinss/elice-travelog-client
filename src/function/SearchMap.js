export default function SearchMap(kakaoMap, place, searchOptions) {
    
    const places = new kakao.maps.services.Places();

    places.keywordSearch(place, placesSearchCB, searchOptions);

    function placesSearchCB (data, status, pagination) {
        if (status === kakao.maps.services.Status.OK) {
            console.log(data);
            let bounds = new kakao.maps.LatLngBounds();
                for (let i=0; i<data.length; i++) {
                    displayMarker(data[i]);
                    bounds.extend(new kakao.maps.LatLng(data[i].y, data[i].x));
                }
                
            kakaoMap.setBounds(bounds);
        } 
    }

    function displayMarker(place) {
    let marker = new kakao.maps.Marker({
        map: kakaoMap,
        position: new kakao.maps.LatLng(place.y, place.x) 
    });

    let infowindow = new kakao.maps.InfoWindow({zIndex:1});
    
    kakao.maps.event.addListener(marker, 'click', function() {
        infowindow.setContent(`<div> 
        <div>${place.place_name}</div>
        <div>${place.address_name}</div>
        <div>${place.phone}</div>
        <a href=${place.place_url} target='_blank'>카카오 지도로 보기</a> 
        </div>`);
        infowindow.open(kakaoMap, marker);
    });
    }
}