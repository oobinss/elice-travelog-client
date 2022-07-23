import React, { useState } from 'react';
import styled from 'styled-components';
import { TbStar } from 'react-icons/tb';
import WritingSearchbar from './WritingSearchbar';
import WritingList from './WritingList';
import { atom } from 'recoil';

const SidebarTitleBox = styled.div`
  margin: 1rem;
  background-color: #fff;
  padding: 0.5rem;
  border-radius: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1.5rem;
`
const FavoriteBox = styled.div`
  .icon {
    width: 3rem;
    height: 3rem;
    padding: 0.5rem;
    background-color: #ffb877;
    color: white;
    border-radius: 5px;
  }
`
const SidebarHeader = styled.h1`
  font-size: 1.8rem;
  text-align: center;
`

const WritingsidebarContainer = styled.div`
  width: 30rem;
  height: 100%;
  background-color: #edf7fa;
  box-shadow: 0 40px 22px 2px rgba(0, 0, 0, 0.25);
  overflow: scroll;
  position: fixed;
`
const SidebarListBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin: 1rem;
  padding: 1rem;
  background-color: #fff;
  border-radius: 5px;
`

const ListFilterBox = styled.div`
  margin: 1rem;
  padding: 0.5rem 1rem 0.5rem 1rem;
  display: flex;
  justify-content: space-between;
  background-color: #fff;
`
const Filterbtn = styled.button`
  border: none;
  background-color: #fff;
  cursor: pointer;
`
const Select = styled.select`
  border: none;
  background-color: #fff;
  cursor: pointer;
`
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
]

export const dataState = atom({ key: 'dataState', default: data })
function WritingSidebar() {
  const [list, setList] = useState(data)
  const [selected, setSelected] = useState('최신')

  const handleChange = e => {
    setSelected(e.target.value)
    let newlist = []
    switch (selected) {
      case '최신':
        newlist = [...list].sort((a, b) => a.index - b.index)
        setList(newlist)
        break
      case '장소':
        newlist = [...list].sort(function (a, b) {
          if (a.name < b.name) {
            return -1
          } else if (a.name > b.name) {
            return 1
          } else {
            return 0
          }
        })
        setList(newlist)
        break
      case '메모':
        newlist = [...list].sort(function (a, b) {
          if (a.memo < b.memo) {
            return -1
          } else if (a.memo > b.memo) {
            return 1
          } else {
            return 0
          }
        })
        setList(newlist)
        break
    }
  }
  return (
    <WritingsidebarContainer>
      <WritingSearchbar />
      <SidebarTitleBox>
        <FavoriteBox>
          <TbStar className="icon" id="favoriteIcon" />
        </FavoriteBox>
        <SidebarHeader>부산 여행</SidebarHeader>
      </SidebarTitleBox>
      <ListFilterBox>
        <Select onClick={e => handleChange(e)}>
          <option value={'최신'}>최신순</option>
          <option value={'장소'}>장소명순</option>
          <option value={'메모'}>메모순</option>
        </Select>
        <Filterbtn>편집</Filterbtn>
      </ListFilterBox>
      <SidebarListBox>
        {list.map(e => {
          return <WritingList id={e.id} name={e.name} url={e.url} />
        })}
      </SidebarListBox>
    </WritingsidebarContainer>
  )
}

export default WritingSidebar
