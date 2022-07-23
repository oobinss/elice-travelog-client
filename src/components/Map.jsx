import React, { useEffect } from 'react'
import styled from 'styled-components'
import { useRecoilState } from 'recoil'
import { placeState, placeInfoState } from '../recoil/Atom'
import makeMap from '../function/makeMap'
import searchMap from '../function/searchMap'
import customMarker from '../function/customMarker'

function Map() {
  const [place] = useRecoilState(placeState)
  const [, setPlaceInfo] = useRecoilState(placeInfoState)

  useEffect(() => {
    const kakaoMap = makeMap()
    searchMap(kakaoMap, place, setPlaceInfo)
    customMarker(kakaoMap)
  }, [place])
  return (
    <MapContainer>
      <div id="map"></div>
    </MapContainer>
  )
}

const MapContainer = styled.div`
  width: 100vw;
  height: calc(100vh - 80px);

  #map {
    height: 100%;
  }

  .customOverlay {
    background-color: white;
    padding: 1rem;
    width: 20rem;
    height: 10rem;
    line-height: 2rem;
    font-weight: bold;
    border: none;
  }

  .toggleSwitch {
    float: right;
    color: #ddd;
  }

  #toggle:checked ~ .toggleSwitch {
    color: rgb(255, 184, 119);
  }
`

export default Map
