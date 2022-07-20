export default function overlayContents(place) {
	return `
    <div class='customOverlay'>
    <input type='checkbox' id='toggle' hidden> 
    <label for='toggle' class='toggleSwitch' style='font-size: 1.5rem;'>★</label>
    </label>
        <div>${place.place_name}</div>
        <div>${place.address_name}</div>
        <div>${place.phone}</div>
        <a href=${place.place_url} target='_blank' style='color:#5f6caf;'>카카오 지도로 보기</a> 
    </div>`;
}
