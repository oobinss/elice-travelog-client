import React from 'react'
import styled from 'styled-components'

function ColorLogPost({ address }) {
  return (
    <PostContainer>
      <PostThumbnail />
      <PostTitle>{address}</PostTitle>
      <TravelPeriod>2022.02.20 - 22.03.30</TravelPeriod>
    </PostContainer>
  )
}

export default ColorLogPost

const PostContainer = styled.article`
  width: 22rem;
  height: 6.7rem;
  background-color: #edf7fa;
  margin: 1rem auto;
  border-radius: 10px;
`
const PostThumbnail = styled.img`
  width: 4rem;
  height: 4rem;
  margin: 1.5rem;
  border-radius: 10px;
  background-color: blue;
`
const PostTitle = styled.h2`
  position: relative;
  top: -5.2rem;
  left: 6.5rem;
  font-size: 1.5rem;
`
const TravelPeriod = styled.p`
  font-size: 1rem;
  position: relative;
  top: -4.5rem;
  left: 6.5rem;
`
