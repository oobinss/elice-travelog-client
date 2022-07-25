import React, { useRef } from 'react'
import SetBookmarkList from '../pages/main/bookmark/SetBookmarkList'
import styled from 'styled-components'
import { useRecoilState } from 'recoil'
import {
  placeInfoState,
  addBookmarkState,
  bookmarkState,
  activeState,
  detailInfoState,
} from '../recoil/Atom'

function PlaceInfo() {
  const [placeInfo] = useRecoilState(placeInfoState)
  const [bookmark, setBookmark] = useRecoilState(bookmarkState)
  const [, setActive] = useRecoilState(activeState)
  const [, setDetailInfo] = useRecoilState(detailInfoState)
  const [addBookmark, setAddBookmark] = useRecoilState(addBookmarkState)

  const placeRef = useRef([])
  placeRef.current = []

  function addRef(data) {
    placeRef.current.push(data)
  }

  function handleStyle(data) {
    if (data.category_group_code == 'AT4') {
      return { border: '2px solid rgb(3, 155, 0)' }
    } else if (data.category_group_code == 'FD6') {
      return { border: '2px solid rgb(0, 41, 254)' }
    } else if (data.category_group_code == 'CE7') {
      return { border: '2px solid rgb(224, 88, 54)' }
    }
  }

  function handleBookmark(e) {
    // 북마크 추가 모달 오픈
    if (bookmark == '') {
      // 북마크에 장소 추가
      setAddBookmark(true)
      const id = e.target.id
      const filterArray = placeRef.current.filter(e => e.id == id)
      setBookmark(filterArray[0])
      e.currentTarget.style.cssText = 'color: rgb(255, 184, 119)'
      console.log(placeRef)
    } else {
      // 북마크에 장소 삭제
      const id = e.target.id
      setBookmark('')
      e.currentTarget.style.cssText = ''
    }
  }

  function ActivateExtend(e) {
    setActive(true)
    setDetailInfo(placeRef.current[e.target.id])
  }

  function makePlaceInfo(placeInfo) {
    return placeInfo.map((data, i) => (
      <div key={i} id={data.id} style={handleStyle(data)} className="infoBox" ref={addRef(data)}>
        <button id={data.id} className="bookmarkBtn" onClick={handleBookmark}>
          ★
        </button>
        <ul>
          <li onClick={ActivateExtend} id={i} style={{ color: '#5f6caf', cursor: 'pointer' }}>
            {data.place_name}
          </li>
          <li>{data.address_name}</li>
        </ul>
      </div>
    ))
  }
  return (
    <PlaceInfoStyle>
      {placeInfo !== '' ? makePlaceInfo(placeInfo) : ''}
      {addBookmark == true ? <SetBookmarkList /> : ''}
    </PlaceInfoStyle>
  )
}
export default PlaceInfo

const PlaceInfoStyle = styled.div`
  display: flex;
  flex-flow: column;
  width: 20rem;
  height: 90vh;
  justify-content: flex-start;
  font-size: 1rem;
  margin: auto;
  position: absolute;
  overflow: scroll;
  top: 80px;

  .infoBox {
    width: 15rem;
    height: 8rem;
    background-color: white;
    border: none;
    border-radius: 1rem;
    margin: 1rem auto;
    padding: 1rem;
    line-height: 2rem;
  }

  .bookmarkBtn {
    float: right;
    font-size: 1.5rem;
    border: none;
    color: #ddd;
    background: white;
  }

  .bmModal {
    position: absolute;
    top: 5rem;
    left: 10rem;
    background-color: white;
    display: flex;
    flex-flow: column;
    width: 10rem;
    height: 5rem;
    text-align: center;
  }

  #x {
    float: right;
    height: 1rem;
    line-height: 1rem;
  }
`
