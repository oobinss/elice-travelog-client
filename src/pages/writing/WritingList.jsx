import React from 'react';
import styled from 'styled-components';
import { useDrag } from 'react-dnd';

const SidebarList = styled.div`
  padding: 1rem;
  border-radius: 5px;
  background-color: #edf7fa;
  display: flex;
  align-items: center;
  gap: 1rem;
  cursor: pointer;
`;
const ListImg = styled.img`
  width: 8rem;
  height: 8rem;
`;
const ListHeader = styled.h2`
  font-size: 1.6rem;
  text-align: center;
`;
const ListTextBox = styled.div`
  display: flex;
  width: 15rem;
  gap: 1rem;
  flex-direction: column;
  justify-content: center;
  align-content: center;
`;
function WritingList({ id, name, url }) {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: 'card',
    item: { id: id },
  }));
  return (
    <SidebarList ref={drag} style={{ border: isDragging ? '3px solid #edf7fa' : '0px' }}>
      <input type={'checkbox'}></input>
      <ListImg src={url} />
      <ListTextBox>
        <ListHeader>{name}</ListHeader>
        <p>해운대 해수욕장을 중심으로 한 우동과 중동 ...</p>
      </ListTextBox>
    </SidebarList>
  );
}

export default WritingList;
