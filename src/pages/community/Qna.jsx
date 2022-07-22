import React, { useState } from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'
import SearchbarIntro from '../../components/SearchbarIntro'
import PostBox from '../../components/PostBox'

function Qna() {
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
      <Writing to="/qna">글쓰기</Writing>
      <PostBox name="anonymous" content="this is question" />
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

export default Qna
