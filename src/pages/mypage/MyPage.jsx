import React from 'react'
import { useState } from 'react'
import styled from 'styled-components'

// import axios from 'axios'
// 작성된 글들을 가져오는 작업을 하기 위해 axios 사용할 예정
const MyPage = () => {
  const [Image, setImage] = useState('img/default.png')
  return (
    <div>
      <MyPageHeader>
        <Profile>
          <Img src={Image} />
          username
          <MyInfo>
            <p>글쓰기</p>
            <p>내 여행={0}</p>
            <p>내 글={0}</p>
          </MyInfo>
        </Profile>
        <PhotoLog>
          <img src="img/photolog.jfif" alt="photolog" />
        </PhotoLog>
      </MyPageHeader>
      <Feed>
        <ImgFeed src="img/airport.jpg" />
        <ImgFeed src="img/beach.jpg" />
        <ImgFeed src="img/hamburg.jpg" />
        <ImgFeed src="img/people.jpg" />
        <ImgFeed src="img/avatar.jpg" />
      </Feed>
    </div>
  )
}

export default MyPage

const MyPageHeader = styled.div`
  background-color: #ffb677;
  display: flex;
  justify-content: column;
  width: 100vw;
`

const Profile = styled.div`
  width: 60vw;
  height: 20vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const Img = styled.img`
  border-radius: 50%;
  width: 10rem;
  height: 10rem;
`

const MyInfo = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 20vw;
  margin-top: 1rem;
`

const PhotoLog = styled.div`
  display: flex;
  width: 40vw;
  justify-content: center;
`

const Feed = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(30%, auto));
  gap: 30px 30px;
`

const ImgFeed = styled.img`
  width: 32vw;
  height: 35vh;
`
