import React from 'react';
import styled from 'styled-components';
import { useDrag } from 'react-dnd';
import { toggleState, checkedState, TagState } from '../../recoil/Atom.jsx';
import { useRecoilState } from 'recoil';
import { BiRestaurant } from 'react-icons/bi';
import { ImLibrary } from 'react-icons/im';
import { IoMdCafe } from 'react-icons/io';

const SidebarList = styled.div`
	padding: 1rem;
	border-radius: 5px;
	background-color: #fafafa;
	box-shadow: rgb(31 38 135 / 10%) 0px 8px 32px 0px;
	cursor: pointer;
	.display {
		display: block;
	}
	.displayNone {
		display: None;
	}
	&:hover {
		color: #5f6caf;
	}
`;
const ListHeader = styled.h2`
	font-size: 1.2rem;
	text-align: center;
`;
const ListTextBox = styled.div`
	display: flex;
	width: 18rem;
	gap: 1rem;
	flex-direction: column;
	align-items: center;
`;
const Label = styled.label`
	display: flex;
	align-items: center;
	gap: 1rem;
	user-select: none;
	justify-content: center;
	cursor: pointer;
	.icon {
		width: 2rem;
		height: 2rem;
	}
`;
const Input = styled.input`
	appearance: none;
	width: 1.5rem;
	height: 1.5rem;
	color: gray;
	border: 1px solid gray;
	border-radius: 50%;
	cursor: pointer;
	&:checked {
		border-color: transparent;
		background-image: url("data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M5.707 7.293a1 1 0 0 0-1.414 1.414l2 2a1 1 0 0 0 1.414 0l4-4a1 1 0 0 0-1.414-1.414L7 8.586 5.707 7.293z'/%3e%3c/svg%3e");
		background-size: 100% 100%;
		background-position: 50%;
		background-repeat: no-repeat;
		background-color: limegreen;
	}
`;
const LinkToURL = styled.a`
	cursor: pointer;
`;
function WritingList({ id, placeName, placeUrl, bookmarkMemo, categoryGroupName }) {
	const [toggle, setToggle] = useRecoilState(toggleState);
	const [{ isDragging }, drag, previewRef] = useDrag(() => ({
		type: 'card',
		item: { id: id },
		collect: monitor => ({ isDragging: monitor.isDragging() }),
	}));
	const [checkedInputs, setCheckedInputs] = useRecoilState(checkedState);

	function handleSelect(checked, id) {
		if (checked) {
			setCheckedInputs([...checkedInputs, id]);
		} else {
			// 체크 해제
			setCheckedInputs(checkedInputs.filter(el => el !== id));
		}
	}
	let category;
	switch (categoryGroupName) {
		case '카페':
			category = <IoMdCafe className="icon" />;
			break;
		case '음식점':
			category = <BiRestaurant className="icon" />;
			break;
		default:
			category = <ImLibrary className="icon" />;
	}

	return (
		<SidebarList ref={previewRef}>
			<LinkToURL ref={drag} href={placeUrl} target="_blank">
				<Label htmlFor={id}>
					{toggle ? (
						<Input
							id={id}
							type={'checkbox'}
							onChange={e => handleSelect(e.currentTarget.checked, id)}
							className={toggle ? 'display' : 'displayNone'}
						></Input>
					) : (
						''
					)}
					{category}
					<ListTextBox>
						<ListHeader>{placeName}</ListHeader>
						<p>{bookmarkMemo}</p>
					</ListTextBox>
				</Label>
			</LinkToURL>
		</SidebarList>
	);
}

export default WritingList;
