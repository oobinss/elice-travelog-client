import React from 'react';
import styled from 'styled-components';
import { TbStar } from 'react-icons/tb';
import WritingSearchbar from './WritingSearchbar';

const SidebarTitleBox = styled.div`
	margin: 1rem;
	background-color: #fff;
	padding: 0.5rem;
	border-radius: 12px;
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 1.5rem;
`;
const FavoriteBox = styled.div`
	.icon {
		width: 3rem;
		height: 3rem;
		padding: 0.5rem;
		background-color: #ffb877;
		color: white;
		border-radius: 5px;
	}
`;
const SidebarHeader = styled.h1`
	font-size: 1.8rem;
	text-align: center;
`;
const ListHeader = styled.h2`
	font-size: 1.6rem;
	text-align: center;
`;
const WritingsidebarContainer = styled.div`
	width: 30rem;
	height: 100%;
	background-color: #edf7fa;
	box-shadow: 0 40px 22px 2px rgba(0, 0, 0, 0.25);
	overflow: scroll;
	position: fixed;
`;
const SidebarListBox = styled.div`
	display: flex;
	flex-direction: column;
	gap: 2rem;
	margin: 1rem;
	padding: 1rem;
	background-color: #fff;
	border-radius: 5px;
`;
const SidebarList = styled.div`
	padding: 1rem;
	border-radius: 5px;
	background-color: #edf7fa;
	display: flex;
	gap: 1rem;
`;
const ListFilterBox = styled.div`
	margin: 1rem;
	padding: 0.5rem;
	display: flex;
	justify-content: space-between;
	background-color: #fff;
`;
// 임시 이미지
const ListImg = styled.div`
	width: 8rem;
	height: 8rem;
	text-align: center;
	background-color: red;
`;
const ListTextBox = styled.div`
	display: flex;
	width: 15rem;
	gap: 1rem;
	flex-direction: column;
	justify-content: center;
	align-content: center;
`;
function WritingSidebar() {
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
				<div>최신순</div>
				<div>편집</div>
			</ListFilterBox>
			<SidebarListBox>
				<SidebarList>
					<ListImg></ListImg>
					<ListTextBox>
						<ListHeader>해운대</ListHeader>
						<p>해운대 해수욕장을 중심으로 한 우동과 중동 ...</p>
					</ListTextBox>
				</SidebarList>
				<SidebarList>
					<ListImg></ListImg>
					<ListTextBox>
						<ListHeader>해운대</ListHeader>
						<p>해운대 해수욕장을 중심으로 한 우동과 중동 ...</p>
					</ListTextBox>
				</SidebarList>
				<SidebarList>
					<ListImg></ListImg>
					<ListTextBox>
						<ListHeader>해운대</ListHeader>
						<p>해운대 해수욕장을 중심으로 한 우동과 중동 ...</p>
					</ListTextBox>
				</SidebarList>
				<SidebarList>
					<ListImg></ListImg>
					<ListTextBox>
						<ListHeader>해운대</ListHeader>
						<p>해운대 해수욕장을 중심으로 한 우동과 중동 ...</p>
					</ListTextBox>
				</SidebarList>
				<SidebarList>
					<ListImg></ListImg>
					<ListTextBox>
						<ListHeader>해운대</ListHeader>
						<p>해운대 해수욕장을 중심으로 한 우동과 중동 ...</p>
					</ListTextBox>
				</SidebarList>
				<SidebarList>
					<ListImg></ListImg>
					<ListTextBox>
						<ListHeader>해운대</ListHeader>
						<p>해운대 해수욕장을 중심으로 한 우동과 중동 ...</p>
					</ListTextBox>
				</SidebarList>
				<SidebarList>
					<ListImg></ListImg>
					<ListTextBox>
						<ListHeader>해운대</ListHeader>
						<p>해운대 해수욕장을 중심으로 한 우동과 중동 ...</p>
					</ListTextBox>
				</SidebarList>
			</SidebarListBox>
		</WritingsidebarContainer>
	);
}

export default WritingSidebar;
