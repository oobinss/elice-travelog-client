import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import WritingSidebar from './WritingSidebar';
import WritingListS from './WritingListS';
// Toast 에디터
import '@toast-ui/editor/dist/toastui-editor.css';
import { Editor } from '@toast-ui/react-editor';
//Toast ColorSyntax 플러그인
import 'tui-color-picker/dist/tui-color-picker.css';
import '@toast-ui/editor-plugin-color-syntax/dist/toastui-editor-plugin-color-syntax.css';
import colorSyntax from '@toast-ui/editor-plugin-color-syntax';
// recoil
import { atom, useRecoilState } from 'recoil';
//react dnd
import { useDrop } from 'react-dnd';

export const boardState = atom({ key: 'boardState', default: [] });

const WritingSection = styled.section`
  width: 100vw;
  height: 95vh;
  gap: 2rem;
`;
const WritingContainer = styled.div`
  width: 70vw;
  margin-left: 35rem;
  padding-top: 3rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;

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
  font-size: 2rem;
`;
const BtnBox = styled.div`
  display: flex;
  gap: 1rem;
`;
const WritingHeaderBox = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Button = styled.button`
  display: block;
  width: 6rem;
  height: 3.2rem;
  font-size: 1rem;
  text-align: center;
  line-height: 3.2rem;
  background-color: #5f6caf;
  color: #fff;
  border: none;
  border-radius: 22px;
  cursor: pointer;
`;
const Board = styled.div`
  width: 30rem;
  height: 10rem;
  background-color: #edf7fa;
  box-shadow: 1px 1px 22px 2px rgba(0, 0, 0, 0.25);
  border-radius: 1rem;
  display: flex;
  gap: 1rem;
  overflow: scroll;
  width: 70vw;
`;

function Writing() {
  // Editor DOM 선택용
  const editorRef = useRef();

  // 등록 버튼 핸들러
  const handleButton = () => {
    // 입력창에 입력한 내용을 HTML 태그 형태로 취득
    ceditorRef.current?.getInstance().getHTML();
    // 입력창에 입력한 내용을 MarkDown 형태로 취득
    editorRef.current?.getInstance().getMarkdown();
  };
  //이미지 업로드
  const onUploadImage = async (blob, callback) => {};
  const data = [
    {
      id: 132,
      name: '해운대',
      index: 1,
      memo: '해운대 바다 멋짐',
      url: 'https://www.busan.go.kr/resource/img/geopark/sub/busantour/busantour1.jpg',
    },
    {
      id: 286,
      name: '광안리',
      index: 2,
      memo: '광안대교 멋짐',
      url: 'https://www.visitbusan.net/uploadImgs/files/cntnts/20191229160530047_oen',
    },
    {
      id: 345,
      index: 3,
      name: '스타벅스',
      memo: '존맛탱',
      url: 'http://www.foodbank.co.kr/news/photo/202106/61595_18750_5558.jpg',
    },
  ];

  const [board, setBoard] = useRecoilState(boardState);
  const [arr, setArr] = useState([]);
  const [{ isOver }, dropToAdd] = useDrop(() => ({
    accept: 'card',
    drop: item => addToBoard(item.id),
  }));
  const addToBoard = id => {
    const items = data.filter(e => id === e.id);
    setBoard(board => [...board, items[0]]);
    //하나로 바꾸기
    // setBoard([items[0]]);
  };
  function arrFilter() {
    board.forEach(element => {
      if (!arr.includes(element)) {
        setArr(arr => [...arr, element]);
      }
    });
    return arr;
  }
  return (
    <WritingSection>
      <WritingSidebar />
      <WritingContainer>
        <WritingHeaderBox>
          <WritingHeader>부산여행</WritingHeader>
          <BtnBox>
            <Button onClick={handleButton}>임시저장</Button>
            <Button onClick={handleButton}>발행</Button>
          </BtnBox>
        </WritingHeaderBox>
        <Board ref={dropToAdd}>
          {arrFilter().map(e => {
            return <WritingListS id={e.id} name={e.name} url={e.url} />;
          })}
        </Board>
        <Editor
          ref={editorRef}
          initialValue="여기에 글을 추가하세요!"
          previewStyle="vertical"
          initialEditType="wysiwyg"
          plugins={[colorSyntax]}
          height="50rem"
          hooks={{
            addImageBlobHook: onUploadImage,
          }}
        />
      </WritingContainer>
    </WritingSection>
  );
}

export default Writing;
