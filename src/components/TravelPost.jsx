import React from 'react';
import styled from 'styled-components';

const mockData = ['서울숲', '슈퍼맛챠', '낙산공원', '대학로', '닭한마리'];

function TravelPost() {
  return (
    <PostContainer>
      <Thumbnail />
      <PositionData>📍Busan</PositionData>
      <Title>2박 3일 부산여행</Title>
      <ProfilePic />
      <PostWriter>akskdkfk</PostWriter>
      <RouteContainer>
        {mockData.map((i, idx) => {
          return <RouteBox key={idx}>{i}</RouteBox>;
        })}
      </RouteContainer>
    </PostContainer>
  );
}

export default TravelPost;

const PostContainer = styled.div`
  width: 45rem;
  height: 20rem;
  border-radius: 22px;
  background-color: #fff;
  box-shadow: 4px 4px 15px rgba(0, 0, 0, 0.15);
  padding: 2rem;
  box-sizing: border-box;
  position: relative;
  top: 7rem;
  left: calc(50vw - 22.5rem);
`;

const Thumbnail = styled.div`
  width: 10rem;
  height: 12rem;
  background-color: aqua;
`;
const PositionData = styled.p`
  display: block;
  width: 10rem;
  height: 3rem;
  font-size: 1.5rem;
  font-weight: bold;
  text-align: center;
  line-height: 3rem;
  margin-top: 1.5rem;
`;

const Title = styled.p`
  display: block;
  width: 30rem;
  height: 3rem;
  font-size: 1.5rem;
  font-weight: bold;
  line-height: 3rem;
  position: relative;
  padding-left: 1rem;
  top: -16.5rem;
  left: 11.5rem;
`;
const ProfilePic = styled.img`
  width: 2rem;
  height: 2rem;
  border-radius: 1.5rem;
  background-color: black;
  position: relative;
  top: -15.6rem;
  left: 12.3rem;
`;
const PostWriter = styled.p`
  position: relative;
  top: -17.3rem;
  left: 15rem;
`;
const RouteContainer = styled.div`
  display: flex;
  width: 29rem;
  height: 10rem;
  overflow-x: auto;
  position: relative;
  top: -16rem;
  left: 12rem;
  &::-webkit-scrollbar {
    width: 5rem;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #eee;
    border-radius: 5rem;
  }
  &::-webkit-scrollbar-track {
    border: none;
    background-color: #fff;
  }
`;
const RouteBox = styled.div`
  width: 7rem;
  height: 7rem;
  margin: 1rem 1rem;
  box-shadow: 1px 1px 15px 1px rgba(0, 0, 0, 0.1);
  flex: 0 0 auto;
  border-radius: 22px;
`;
