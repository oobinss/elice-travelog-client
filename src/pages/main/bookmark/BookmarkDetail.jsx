import React from 'react'
import styled from 'styled-components'

function BookmarkDetail() {
  function handleStyle(data) {
    if (data.category_group_code === 'AT4') {
      return { border: '2px solid rgb(3, 155, 0)' }
    } else if (data.category_group_code === 'FD6') {
      return { border: '2px solid rgb(0, 41, 254)' }
    } else if (data.category_group_code === 'CE7') {
      return { border: '2px solid rgb(224, 88, 54)' }
    }
  }

  return (
    <DetailPageStyle>
      <div className="folder"></div>
      <div className="content"></div>
      <button>글쓰기</button>
    </DetailPageStyle>
  )
}

const DetailPageStyle = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: flex-start;
  margin: auto;

  .folder {
    height: 3rem;
    margin: 1rem auto;
  }
  .content {
    height: 75vh;
    margin: 1rem auto;
    overflow: scroll;
  }

  .infoBox {
    width: 15rem;
    height: 8rem;
    font-size: 1rem;
    background-color: white;
    border: none;
    border-radius: 1rem;
    margin: 1rem auto;
    padding: 1rem;
    line-height: 2rem;
  }
`

export default BookmarkDetail
