import React, { useState } from 'react';
import styled from 'styled-components';
import Companion from './Companion';
import Qna from './Qna';
import Traveling from './Traveling';
function Community() {
	const [travel, setTravel] = useState(false);
	const [companion, setCompanion] = useState(true);
	const [qna, setQna] = useState(false);

	return (
		<div>
			<TabMenuUl>
				<TabMenuLi
					className={travel}
					onClick={() => {
						setTravel(true);
						setCompanion(false);
						setQna(false);
					}}
				>
					여행하기
				</TabMenuLi>
				<TabMenuLi
					className={companion}
					onClick={() => {
						setTravel(false);
						setCompanion(true);
						setQna(false);
					}}
				>
					동행 구해요
				</TabMenuLi>
				<TabMenuLi
					className={qna}
					onClick={() => {
						setTravel(false);
						setCompanion(false);
						setQna(true);
					}}
				>
					Q & A
				</TabMenuLi>
			</TabMenuUl>
			{companion && <Companion />}
			{qna && <Qna />}
			{travel && <Traveling />}
		</div>
	);
}

export default Community;

const TabMenuUl = styled.ul`
	width: 45rem;
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
	&.true {
		background-color: #5f6caf;
		color: #fff;
	}
`;
