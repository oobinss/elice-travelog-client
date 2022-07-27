import React from 'react';
import styled from 'styled-components';
import ColorLog from './ColorLog';
import { useRecoilState } from 'recoil';
import { colorLogState } from '../recoil/Atom';
import { IoClose } from 'react-icons/io5';

function ColorLogPageComponents() {
  const [click, setClick] = useRecoilState(colorLogState);
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
  background-color: rgba(213, 213, 213, 0.5);
  position: fixed;
  left: 0;
`;
const Modal = styled.div`
  width: 50rem;
  height: 40rem;
  background-color: #fff;
  position: fixed;
  top: 10rem;
  left: calc(50vw - 25rem);
`;
const CloseButton = styled(IoClose)`
  font-size: 2rem;
  position: relative;
  top: -33rem;
  left: 45.5rem;
  cursor: pointer;
`;
