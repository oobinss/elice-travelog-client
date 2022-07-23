import React from 'react'
import styled from 'styled-components'
import { IoIosClose } from 'react-icons/io'
import { boardState } from './Writing'
import { useRecoilState } from 'recoil'
const ListBox = styled.div`
  padding: 1rem;
  position: relative;
  border-radius: 5px;
  background-color: #edf7fa;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`
const ListImg = styled.img`
  width: 8rem;
  height: 8rem;
  border-radius: 2px;
`
const ListHeader = styled.h2`
  font-size: 1.6rem;
  text-align: center;
`
const Closebtn = styled.button`
  position: absolute;
  top: 10px;
  left: 10px;
  background-color: rgba(0, 0, 0, 0);
  &:hover {
    background-color: red;
  }
  color: #fff;
  cursor: pointer;
  border: none;
  border-radius: 50%;
  width: 1.5rem;
  height: 1.5rem;
  .close {
    position: absolute;
    top: -1px;
    left: -1px;
    width: 1.5rem;
    height: 1.5rem;
  }
`
function WritingListS({ id, name, url }) {
  const handleButton = () => {
    // 구현 중
  }

  return (
    <ListBox>
      <ListImg src={url} />
      <ListHeader>{name}</ListHeader>
      <Closebtn onClick={handleButton}>
        <IoIosClose className="close" />
      </Closebtn>
    </ListBox>
  )
}

export default WritingListS
