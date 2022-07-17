import React from 'react';
import styled from 'styled-components';

const LoginSection = styled.section`
	width: 100vw;
	height: 100vw;
	background-color: white;
`;
const LoginContainer = styled.article`
	width: 30rem;
	height: 25rem;
	margin: 6rem auto;
	box-shadow: 1px 1px 22px 2px rgba(0, 0, 0, 0.25);
	border-radius: 2.5rem;
`;
const LoginHeader = styled.h2`
	color: #5f6caf;
	font-size: 2rem;
	position: relative;
	top: 3rem;
	left: 12rem;
`;
const LoginButton = styled.button`
	width: 19rem;
	height: 3.2rem;
	font-size: 1rem;
	text-align: center;
	line-height: 3.2rem;
	position: relative;
	top: 6rem;
	left: 5.5rem;
	margin: 0.8rem 0;
	background-color: #5f6caf;
	color: #fff;
	border: none;
	border-radius: 22px;
`;

const LoginInput = styled.input`
	width: 18rem;
	height: 2.5rem;
	padding: 0.8rem;
	box-sizing: border-box;
	position: relative;
	top: 6rem;
	left: 6rem;
	margin-bottom: 1.8rem;
	color: #5f6caf;
	background-color: #edf7fa;
	border-radius: 10px;
	border: none;
`;

function LoginForEmail() {
	return (
		<LoginSection>
			<LoginContainer>
				<LoginHeader>로그인</LoginHeader>
				<LoginInput name="email" placeholder="이메일을 입력해 주세요." />
				<LoginInput name="password" placeholder="비밀번호를 입력해 주세요." />
				<LoginButton>로그인</LoginButton>
			</LoginContainer>
		</LoginSection>
	);
}

export default LoginForEmail;
