import React from 'react'
import styled from 'styled-components'
import ColorLogPost from './ColorLogPost'

function PostContainerForColorlog({ data }) {
  return (
    <PostContainer>
      {data && data.posts.map(i => <ColorLogPost address={i.address_name} />)}
    </PostContainer>
  )
}

export default PostContainerForColorlog

const PostContainer = styled.section`
  width: 25rem;
  height: 30rem;
  border-radius: 22px;
  background-color: #fff;
  box-shadow: 4px 4px 15px rgba(0, 0, 0, 0.15);
  position: absolute;
  top: 8rem;
  left: 35rem;
  overflow: scroll;
  overflow-x: hidden;
`
