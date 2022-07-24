import React, { useEffect } from 'react'
import Searchbar from '../Searchbar'
import { BsCaretLeftSquare } from 'react-icons/bs'
import styled from 'styled-components'
import { useRecoilState } from 'recoil'
import { bookmarkbarState, viewDetailState } from '../../../recoil/Atom'
import BookmarkList from './BookmarkList'
import BookmarkDetail from './BookmarkDetail'

function Bookmarkbar() {
  const [bmClose, setBmClose] = useRecoilState(bookmarkbarState)
  const [viewDetail] = useRecoilState(viewDetailState)

  useEffect(() => {
    renderDetailPage()
  }, [viewDetail])

  function renderDetailPage() {
    return viewDetail ? <BookmarkList /> : <BookmarkDetail />
  }

  return (
    <BookmarkbarStyle>
      <div className={bmClose ? 'bookmarkbar close' : 'bookmarkbar'}>
        <Searchbar />
        <BsCaretLeftSquare id="closeBtn" onClick={() => setBmClose(true)} />
        <h1>나의 여정</h1>
        <div className="contents">{renderDetailPage()}</div>
      </div>
    </BookmarkbarStyle>
  )
}

const BookmarkbarStyle = styled.div`
  .bookmarkbar {
    display: flex;
    flex-flow: column;
    position: absolute;
    top: -5rem;
    left: 4rem;
    width: 20rem;
    height: 100vh;
    background-color: #edf7fa;
  }

  h1 {
    text-align: center;
  }

  .close {
    display: none;
  }

  #closeBtn {
    position: absolute;
    top: 50vh;
    transform: scale(1.5);
    color: #5f6caf;
    opacity: 0.9;
    padding: 0;
    left: 260px;
  }
`

export default Bookmarkbar
