import React from 'react'
import styled from 'styled-components'
import { useRecoilState } from 'recoil'
import { activeState, detailInfoState } from '../../recoil/Atom'

function PlaceInfoExtend() {
  const [active, setActive] = useRecoilState(activeState)
  const [detailInfo, ] = useRecoilState(detailInfoState)

  return (
    <PlaceInfoExtendbar>
      <div className={active ? 'placeInfoExtend' : 'placeInfoExtend close'}>
        <div className="detailInfo">
          <div id="x" onClick={() => setActive(false)}>
            x
          </div>
          <h1>{detailInfo.place_name}</h1>
          <h3>{detailInfo.category_group_name}</h3>
          <h2>지번주소 : {detailInfo.address_name}</h2>
          <h2>
            {detailInfo.road_address_name === ''
              ? ''
              : `도로명주소 : ${detailInfo.road_address_name}`}
          </h2>
          <p>{detailInfo.phone}</p>
          <div className="placeUrl">
            <a href={detailInfo.place_url}>카카오 지도에서 보기</a>
          </div>
        </div>
        <div className="travelog"></div>
      </div>
    </PlaceInfoExtendbar>
  )
}

const PlaceInfoExtendbar = styled.div`
  .placeInfoExtend {
    display: flex;
    flex-flow: column;
    position: absolute;
    top: 5rem;
    left: 20rem;
    width: 20rem;
    height: 90vh;
    overflow: scroll;
    background-color: #edf7fa;
  }

  .placeInfoExtend::-webkit-scrollbar {
    display: none;
  }

  .detailInfo {
    background-color: white;
    margin: 1rem;
    border-radius: 1rem;
  }

  .close {
    display: none;
    flex-flow: column;
  }

  #x {
    float: right;
    font-size: 1.5rem;
  }

  h1 {
    font-size: 1.5rem;
    color: #5f6caf;
    text-align: center;
  }

  h2 {
    font-size: 1rem;
  }

  h3 {
    font-size: 1rem;
    text-align: center;
    color: #999;
  }

  p {
    font-size: 1rem;
    text-align: center;
  }

  .placeUrl {
    text-align: center;
  }

  a {
    color: #5f6caf;
    font-size: 1rem;
  }

  .travelog {
    height: 100%;
    background-color: white;
    margin: 1rem;
  }
`

export default PlaceInfoExtend
