import React from 'react'
import styled from 'styled-components'
import { BiRestaurant } from 'react-icons/bi';
import { ImLibrary } from 'react-icons/im';
import { IoMdCafe } from 'react-icons/io';

const SidebarList = styled.div`
  padding: 1rem;
  border-radius: 5px;
  background-color: #edf7fa;
  gap: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  .icon {
    width: 2rem;
    height: 2rem;
  }
  &:hover {
    color: #5f6caf;
  }
`;
const ListHeader = styled.h2`
  font-size: 1.2rem;
  text-align: center;
`
const ListTextBox = styled.div`
  display: flex;
  width: 18rem;
  gap: 1rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const LinkToURL = styled.a`
  position: relative;
  display: flex;
  gap: 1rem;
  align-items: center;
  cursor: pointer;
  
`;

function ViewList({ bookmarkId, placeName, placeUrl, bookmarkMemo }) {

  return (
    <SidebarList>
      <LinkToURL href={placeUrl} target="_blank">
        <BiRestaurant className="icon" />
        <ListTextBox>
          <ListHeader>{placeName}</ListHeader>
          <p>{bookmarkMemo}</p>
        </ListTextBox>
      </LinkToURL>
    </SidebarList>
  );
}

export default ViewList
