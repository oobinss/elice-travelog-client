import React, { useState, useEffect } from 'react'
import styled from 'styled-components';
import ViewBoardList from './ViewBoardList'
import Comment from './Comment'
import { IoMapOutline, IoFlagSharp } from 'react-icons/io5';
// Toast-UI Viewer 임포트
import '@toast-ui/editor/dist/toastui-editor-viewer.css';
import { Viewer } from '@toast-ui/react-editor';
import axios from 'axios';
const WritingSection = styled.section`
  width: 100vw;
  height: calc(100vh - 5rem);
  gap: 2rem;
`;
const WritingContainer = styled.div`
  width: 74vw;
  height: calc(100vh - 5rem);
  padding-left: 20vw;
  position: relative;
  display: flex;
`;
const EditContainer = styled.div`
  display: flex;
  width: 46vw;
  margin-right: 22vw;
  padding-right: 2vw;
  padding-left: 2vw;
  flex-direction: column;
  padding-top: 3rem;
  gap: 2rem;
  border-left: 1px solid #e9e9e9;
  .toastui-editor-defaultUI {
    border: 3px solid #f1f1f1 !important;
    padding: 5px !important;
    border-radius: 2px !important;
  }
  .toastui-editor-defaultUI-toolbar {
    background-color: #edf7fa;
  }
`;
const WritingHeader = styled.h1`
	font-size: 3rem;
	line-height: 1.5;
	letter-spacing: -0.004em;
	padding-left: 1rem;
	font-weight: 800;
`;
const WritingHeaderBox = styled.div`
	display: flex;
	flex-direction: column;
  gap 2rem;
`;
const TagBox = styled.div`
	display: flex;
	gap: 1rem;
	padding-left: 1rem;
	align-items: center;
`;
const Tag = styled.a`
	height: 2rem;
	padding-left: 1rem;
	padding-right: 1rem;
	background-color: #f1f1f1;
	color: #5f6caf;
	cursor: pointer;
	border-radius: 1rem;
	border: 0;
	font-weight: bold;
	font-size: 1rem;
	line-height: 2rem;
`;
const City = styled.a`
	height: 2.5rem;
	padding-left: 1rem;
	padding-right: 1rem;
	background-color: #5f6caf;
	color: #fff;
	cursor: pointer;
	border-radius: 1rem;
	border: 0;
	font-weight: bold;
	font-size: 1.2rem;
	line-height: 2.5rem;
`;
const Board = styled.div`
  width: 100%;
  height: 18rem;
  display: flex;
  gap: 1rem;
  overflow: scroll;
`;
const ViewerBox = styled.div`
  padding-left: 1 rem;
`
//메뉴 버튼
const BtnInfo = styled.span`
  display: none;
  height: 1rem;
  position: absolute;
  padding: 0.5rem;
  bottom: 25%;
  color: black;
  transform: translate(-50%, 0);
  border-radius: 0.5rem;
  background-color: #f1f1f1;
`;
const MenuBtn = styled.a`
  display: flex;
  width: 3.5rem;
  height: 3.5rem;
  border-radius: 50%;
  border: none;
  position: relative;
  background-color: #5f6caf;
  color: #fff;
  text-align: center;
  align-items: center;
  &:hover {
    background-color: #949dc9;
  }
  &:hover ${BtnInfo} {
    display: block;
  }
  .munuImg {
    position: absolute;
    width: 1.5rem;
    height: 1.5rem;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  .map {
    left: -2.7rem;
  }
  .log {
    left: -4.2rem;
  }
`;
const MenuBtnBox = styled.div`
  display: flex;
  position: relative;
`;
const MenuBox = styled.div`
  display: flex;
  flex-direction: column;
  position: fixed;
  left: 13vw;
  top: 28vh;
  justify-content: flex-end;
  padding: 0.5rem;
  gap 1rem;
  width: 4rem;
  background-color:#f1f1f1;
  border: 1px solid #D1D1D1;
  border-radius: 2rem;
  align-items: center;
`;

function View() {
  const [writing, setWriting] = useState({});
  const [board, setBoard] = useState([]);
  const [tag, setTag] = useState([]);
  //axios bearer token
  const token = window.localStorage.getItem('token');
  let config = {
    headers: { Authorization: `Bearer ${token}` },
  };
  const getWritingData = async () => {
    try {
      await axios
        .get('http://localhost:8000/api/posts/user/32', config)
        .then(res => {
          setWriting(res.data);
          setBoard(JSON.parse(res.data.markedData));
          setTag(JSON.parse(res.data.tag));
        });
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getWritingData();
  }, []);
  return (
		<WritingSection>
			<WritingContainer>
				<MenuBox>
					<MenuBtnBox>
						<MenuBtn href="/main">
							<IoMapOutline className="munuImg" />
							<BtnInfo className="map">MAP</BtnInfo>
						</MenuBtn>
					</MenuBtnBox>
					<MenuBtnBox>
						<MenuBtn href="/community">
							<IoFlagSharp className="munuImg" />
							<BtnInfo className="log">COLORLOG</BtnInfo>
						</MenuBtn>
					</MenuBtnBox>
				</MenuBox>
				<EditContainer>
					<WritingHeaderBox>
						<WritingHeader>{writing.title}</WritingHeader>
						<TagBox>
              {writing.cateCity ? <City>{writing.cateCity}</City> : ''}
							{tag ? tag.map(e => <Tag>{e}</Tag>) : ''}
						</TagBox>
					</WritingHeaderBox>
					<Board>
						{board.map(e => {
							return (
								<ViewBoardList
									bookmarkId={e.bookmarkId}
									placeName={e.placeName}
									placeUrl={e.placeUrl}
									bookmarkMemo={e.bookmarkMemo}
								/>
							);
						})}
					</Board>
					<ViewerBox>{writing.id ? <Viewer initialValue={writing.content} /> : ''}</ViewerBox>
				</EditContainer>
				<Comment/>
			</WritingContainer>
		</WritingSection>
	);
}

export default View
