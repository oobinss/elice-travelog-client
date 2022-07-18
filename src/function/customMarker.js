export default function customMarker(kakaoMap) {

        const marker = new kakao.maps.Marker({
            position: kakaoMap.getCenter()
        });

        let infowindow = new kakao.maps.InfoWindow({zIndex:1});
        const geocoder = new kakao.maps.services.Geocoder();

        kakao.maps.event.addListener(kakaoMap, 'click', function(mouseEvent) {
            searchDetailAddrFromCoords(mouseEvent.latLng, function(result, status) {
                if (status === kakao.maps.services.Status.OK) {
                    const placeName = geocoder.addressSearch(result[0].address.address_name, (result, status) => {
                        if (status === kakao.maps.services.Status.OK) {
                            console.log(result);
                        }
                    });
                    let detailAddr = !!result[0].road_address ? `<div>${result[0].road_address.building_name}</div>` : '';
                    detailAddr += `<div>${result[0].address.address_name}</div>`;
                    
                    let content = `<div class="bAddr">
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