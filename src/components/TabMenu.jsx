import React from 'react';
import styled from 'styled-components';

function TabMenu() {
	return (
		<TabMenuUl>
			<TabMenuLi>여행하기</TabMenuLi>
			<TabMenuLi>동행 구해요</TabMenuLi>
			<TabMenuLi>Q & A</TabMenuLi>
		</TabMenuUl>
	);
}

export default TabMenu;

const TabMenuUl = styled.ul`
	width: 60vw;
	margin: 60px auto 0;
	display: flex;
	justify-content: space-between;
`;

const TabMenuLi = styled.li`
	width: 11rem;
	height: 4rem;
	border-radius: 22px;
	background-color: #edf7fa;
	text-align: center;
	line-height: 4rem;
	cursor: pointer;
`;
