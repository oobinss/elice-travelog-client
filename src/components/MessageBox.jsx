import React from 'react';
import styled from 'styled-components';

function MessageBox({ message, top, left }) {
	return (
		<MessageContainer style={{ top: `${top}px`, left: `${left}px` }}>{message}</MessageContainer>
	);
}

export default MessageBox;

const MessageContainer = styled.div`
	width: 5rem;
	height: 1.5rem;
	text-align: center;
	line-height: 1.5rem;
	background-color: #fff;
	border-radius: 0.8rem;
	position: fixed;
	top: 0;
`;
