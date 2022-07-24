import React, { useState, useEffect, useRef } from 'react'
import styled from 'styled-components'
import Extendbar from './Extendbar'
import Bookmarkbar from './bookmark/Bookmarkbar'
import { BiRestaurant } from 'react-icons/bi'
import { ImSearch, ImLibrary } from 'react-icons/im'
import { IoMdCafe } from 'react-icons/io'
import { TbStar } from 'react-icons/tb'
import { useRecoilState } from 'recoil'
import {
  extendbarState,
  bookmarkbarState,
  placeState,
  mainInputValueState,
} from '../../recoil/Atom'

function Sidebar() {
  const [close, setClose] = useRecoilState(extendbarState)
  const [, setPlace] = useRecoilState(placeState)
  const [mainInputValue] = useRecoilState(mainInputValueState)
  const [bmClose, setBmClose] = useRecoilState(bookmarkbarState)
  const [btnActive, setBtnActive] = useState('')
  // 리팩토링 요망
  const search = useRef()
  const restaurant = useRef()
  const landmark = useRef()
  const cafe = useRef()
  const bookmark = useRef()

  useEffect(() => {
    search.current.className === btnActive
      ? (search.current.style = 'background: #edf7fa;')
      : (search.current.style = 'background: white;')
    restaurant.current.className === btnActive
      ? (restaurant.current.style = 'background: #edf7fa;')
      : (restaurant.current.style = 'background: white;')
    landmark.current.className === btnActive
      ? (landmark.current.style = 'background: #edf7fa;')
      : (landmark.current.style = 'background: white;')
    cafe.current.className === btnActive
      ? (cafe.current.style = 'background: #edf7fa;')
      : (cafe.current.style = 'background: white;')
    bookmark.current.className === btnActive
      ? (bookmark.current.style = 'background: #edf7fa;')
      : (bookmark.current.style = 'background: white;')
  }, [btnActive])

  return (
    <SidebarStyle>
      <div className="sidebar">
        <div className="filterBox">
          <div className="search" ref={search}>
            <ImSearch
              className="icon"
              style={{ marginTop: '30px', backgroundColor: '#d9d9d9' }}
              onClick={() => {
                setBmClose(true)
                setClose(!close)
                setBtnActive('search')
              }}
            />
          </div>
          <div className="restaurant" ref={restaurant}>
            <BiRestaurant
              className="icon"
              style={{ backgroundColor: '#0029fe' }}
              onClick={() => {
                setPlace(mainInputValue + ' 식당')
                setBtnActive('restaurant')
              }}
            />
          </div>
          <div className="landmark" ref={landmark}>
            <ImLibrary
              className="icon"
              style={{ backgroundColor: '#039b00' }}
              onClick={() => {
                setPlace(mainInputValue + ' 관광지')
                setBtnActive('landmark')
              }}
            />
          </div>
          <div className="cafe" ref={cafe}>
            <IoMdCafe
              className="icon"
              style={{ backgroundColor: '#e05836' }}
              onClick={() => {
                setPlace(mainInputValue + ' 카페')
                setBtnActive('cafe')
              }}
            />
          </div>
          <div className="bookmark" ref={bookmark}>
            <TbStar
              className="icon"
              style={{ backgroundColor: '#ffb877' }}
              onClick={() => {
                setClose(true)
                setBmClose(!bmClose)
                setBtnActive('bookmark')
              }}
            />
          </div>
        </div>
        <Extendbar />
        <Bookmarkbar />
      </div>
    </SidebarStyle>
  )
}

const SidebarStyle = styled.div`
  left: 0;
  width: 70px;

  .sidebar {
    float: left;
    position: relative;
    background-color: #ffffff;
    font-size: 1.5rem;
    line-height: 48px;
    transition: 0.3s ease-in-out;
    height: calc(100vh - 80px);
    z-index: 5;
  }

  .filterBox {
    display: flex;
    flex-flow: column;
  }

  .icon {
    margin: 10px;
    padding: 10px;
    border-radius: 5px;
    color: white;
  }

  .icon:hover {
    transform: scale(1.1);
    opacity: 0.8;
  }

  .icon:active {
    filter: invert(80%);
  }
`

export default Sidebar
