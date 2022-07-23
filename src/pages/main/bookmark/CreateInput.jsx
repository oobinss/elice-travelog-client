import React, { useRef } from 'react'
import { useRecoilState } from 'recoil'
import { handleInputState, bookmarkListState } from '../../../recoil/Atom'

export default function CreateInput() {
  const inputRef = useRef()
  const [bmList, setBmList] = useRecoilState(bookmarkListState)
  const [, setHandleInput] = useRecoilState(handleInputState)

  function addBmList(e) {
    e.preventDefault()
    setBmList([...bmList, inputRef.current.value])
    setHandleInput(false)
  }

  return (
    <form className="addBmListForm">
      <input className="addBmListInput" ref={inputRef} />
      <button onClick={addBmList}>확인</button>
    </form>
  )
}
