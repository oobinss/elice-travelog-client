import React from 'react'
import styled from 'styled-components'

function PostBox({ name, content }) {
  return (
    <PostContainer>
      <PostImg />
      <PostWriter>{name}</PostWriter>
      <PostContent>{content}</PostContent>
    </PostContainer>
  )
}

export default PostBox

const PostContainer = styled.div`
  width: 45rem;
  height: 10rem;
  border-radius: 22px;
  background-color: #fff;
  box-shadow: 4px 4px 15px rgba(0, 0, 0, 0.15);
  position: relative;
  top: 10rem;
  left: calc(50vw - 22.5rem);
`

const PostImg = styled.img`
  width: 3rem;
  height: 3rem;
  border-radius: 1.5rem;
  background-color: black;
  position: relative;
  top: 2rem;
  left: 4rem;
`

const PostWriter = styled.p`
  font-size: 1.5rem;
  position: relative;
  top: -0.5rem;
  left: 8.5rem;
`

const PostContent = styled.p`
  font-size: 1.25rem;
  position: relative;
  top: 2rem;
  left: 4rem;
`
