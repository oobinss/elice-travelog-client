import React from 'react';
import styled from 'styled-components';
import ColorLog from './ColorLog';
import { useSetRecoilState } from 'recoil';
import { colorLogState } from '../recoil/Atom';
import { IoClose } from 'react-icons/io5';

function ColorLogPageComponents() {
	const setClick = useSetRecoilState(colorLogState);
	const clickHandler = () => {
		setClick(false);
	};
	return (
		<ModalBG onClick={clickHandler}>
			<Modal onClick={e => e.stopPropagation()}>
				<ColorLog />
				<CloseButton onClick={clickHandler} />
			</Modal>
		</ModalBG>
	);
}

export default ColorLogPageComponents;

const ModalBG = styled.article`
	width: 100vw;
	height: 100%;
	background-color: rgba(255, 255, 255, 0.5);
	position: fixed;
	top: 0;
	left: 0;
`;
const Modal = styled.div`
	width: 50rem;
	height: 40rem;
	background-color: #fff;
	box-shadow: 1px 1px 15px 1px rgba(0, 0, 0, 0.25);
	position: fixed;
	top: calc(50vh - 20rem);
	left: calc(50vw - 25rem);
`;
const CloseButton = styled(IoClose)`
	font-size: 2rem;
	position: relative;
	top: -33rem;
	left: 45.5rem;
	cursor: pointer;
`;
