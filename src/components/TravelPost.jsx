import React from 'react';
import styled from 'styled-components';

function TravelPost() {
  return (
    <PostContainer>
      <Thumbnail />
      <PositionData>📍Busan</PositionData>
      <Title>2박 3일 부산여행</Title>
      <ProfilePic />
      <PostWriter>akskdkfk</PostWriter>
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
