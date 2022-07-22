import React, { useState } from 'react'
import styled from 'styled-components'
import SearchbarIntro from '../../components/SearchbarIntro'
import PostBox from '../../components/PostBox'
import { NavLink } from 'react-router-dom'

function Companion() {
  const [inputValue, setInputValue] = useState('')

  const handleChange = e => {
    setInputValue(e.target.value)
  }
  const handleClick = () => {
    console.log(inputValue)
  }
  return (
    <div>
      <SearchbarIntro
        title=""
        containerWidth="45rem"
        containerHeight="5rem"
        inputWidth="25rem"
        titlePadding="0"
        inputLeft="4rem"
        visibleOption="visible"
        value={inputValue}
        changeMethod={handleChange}
        clickMethod={handleClick}
      />
      <Writing to="/companion">글쓰기</Writing>
      <PostBox name="sojeong" content=" 같이 갈사람 괌" />
    </div>
  )
}
const Writing = styled(NavLink)`
  display: block;
  width: 5rem;
  height: 3rem;
  background-color: #5f6caf;
  text-align: center;
  line-height: 3rem;
  color: #fff;
  border: none;
  border-radius: 15px;
  position: absolute;
  left: 43rem;
  top: 19rem;
`

export default Companion
