import React from 'react';
import { useState } from 'react';
import styled from 'styled-components';

const MyPage = () => {
  const [Image, setImage] = useState('img/default.png');
  return (
    <Page>
      <MyPageHeader>
        <Profile>
          <ProfileHeader>
            <ProfileImg>
              <Img src={Image} />
              <UserName>username</UserName>
            </ProfileImg>
            <ProfileInfo>dddd</ProfileInfo>
          </ProfileHeader>
          <MyInfo>
            <MyInfoBox>
              <p>내 여행</p>
              <MyLog>3</MyLog>
            </MyInfoBox>
            <MyInfoBox>
              <p>여행글</p>
              <MyLog>3</MyLog>
            </MyInfoBox>
            <MyInfoBox>
              <p>컬러로그</p>
            </MyInfoBox>
          </MyInfo>
        </Profile>
      </MyPageHeader>
      <Feed>
        <ImgFeed src="img/airport.jpg" />
        <ImgFeed src="img/beach.jpg" />
        <ImgFeed src="img/hamburg.jpg" />
        <ImgFeed src="img/people.jpg" />
        <ImgFeed src="img/avatar.jpg" />
      </Feed>
    </Page>
  );
};

export default MyPage;

const Page = styled.div`
  width: 100vw;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  background-color: rgb(250, 250, 250);
  align-items: center;
`;
const MyPageHeader = styled.div`
  display: flex;
  justify-content: column;
  width: 60vw;
`;

const Profile = styled.div`
  width: 100vw;
  height: 40vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ProfileHeader = styled.div`
  display: flex;
  width: 60vw;
  heigth:40vh
  justify-content: space-around;
`;
const ProfileImg = styled.div`
  display: flex;
  flex-direction: column;
  width: 40vw;
  align-items: center;
`;
const ProfileInfo = styled.section`
  display: flex;
  align-items: center;
  width: 60vw;
  justify-content: flex-start;
`;

const Img = styled.img`
  border-radius: 50%;
  width: 10rem;
  height: 10rem;
`;

const MyInfo = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 100%;
  margin-top: 4rem;
`;
const MyLog = styled.p`
  display: flex;

  width: 2rem;
  border-radius: 1rem;
  justify-content: center;
  height: 2rem;
  position: relative;
`;
const UserName = styled.p`
  font-size: 2rem;
  margin-top: 1rem;
`;
const MyInfoBox = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 20%;
  height: 5vh;
  margin-top: 1rem;
  background-color: #edf7fa;
  line-height: 5vh;
  border-radius: 1rem;
  font-size: 1.5rem;
  border: 1px solid grey;
`;

const Feed = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(30%, auto));
  gap: 25px 25px;
  border-top: 1px solid grey;
  padding-top: 3rem;
  width: 60vw;
`;

const ImgFeed = styled.img`
  width: 19vw;
  height: 32vh;
  align-items: stretch;
  box-sizing: border-box;
  object-fit: fill;
`;
