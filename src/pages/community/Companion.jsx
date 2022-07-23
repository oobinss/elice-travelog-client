import React, { useState } from 'react'
import SearchbarIntro from '../../components/SearchbarIntro'
import PostBox from '../../components/PostBox'

function Companion() {
  const [inputValue, setInputValue] = useState('')

  const handleChange = e => {
    setInputValue(e.target.value)
  }
  const handleClick = () => {}
  return (
    <div>
      <SearchbarIntro
        title=""
        containerWidth="45rem"
        containerHeight="5rem"
        inputWidth="25rem"
        inputLeft="4rem"
        inputTop="0rem"
        searchTop="0.3rem"
        visibleOption="visible"
        clickurl="companion"
        value={inputValue}
        changeMethod={handleChange}
        clickMethod={handleClick}
      />
      <PostBox name="sojeong" content=" 같이 갈사람 괌" />
    </div>
  )
}

export default Companion
