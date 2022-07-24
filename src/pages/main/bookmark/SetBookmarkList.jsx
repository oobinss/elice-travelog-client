import React, { useRef } from 'react'
import CreateInput from './CreateInput'
import { useRecoilState } from 'recoil'
import { bookmarkListState, addBookmarkState, handleInputState } from '../../../recoil/Atom'

export default function SetBookmarkList() {
  const [bmList] = useRecoilState(bookmarkListState)
  const [, setAddBookmark] = useRecoilState(addBookmarkState)
  const [handleInput, setHandleInput] = useRecoilState(handleInputState)

  const listRef = useRef([])
  listRef.current = []

  function addListRef(element) {
    listRef.current.push(element)
  }

  function handleBmList() {
    setHandleInput(true)
  }
  return (
    <div className="bmModal">
      <div id="x" onClick={() => setAddBookmark('false')}>
        x
      </div>
      <button className="addBmList" onClick={handleBmList}>
        새 리스트
      </button>
      {bmList.map((element, i) => (
        <button id={i} key={i} ref={addListRef(element)}>
          {element}
        </button>
      ))}
      {handleInput ? <CreateInput /> : ''}
      <button type="submit" className="saveBmList">
        저장하기
      </button>
    </div>
  )
}
