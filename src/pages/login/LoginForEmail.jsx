import React from 'react';
import styled from 'styled-components';
//import { NavLink } from 'react-router-dom';

const LoginSection = styled.section`
	width: 100vw;
	height: 100vw;
	background-color: white;
`;
const LoginContainer = styled.article`
	width: 500px;
	height: 400px;
	margin: 100px auto;
	box-shadow: 1px 1px 22px 2px rgba(0, 0, 0, 0.25);
	border-radius: 38px;
`;
const LoginHeader = styled.h2`
	color: #5f6caf;
	font-size: 30px;
	position: relative;
	top: 50px;
`;
const LoginButton = styled.button`
	display: block;
	width: 300px;
	height: 55px;
	font-size: 18px;
	text-align: center;
	line-height: 55px;
	position: relative;
	top: 130px;
	left: 100px;
	margin: 15px 0;
	background-color: #5f6caf;
	color: #fff;
	border: none;
	border-radius: 22px;
`;

const LoginInput = styled.input`
	width: 300px;
	height: 40px;
	padding: 15px;
	box-sizing: border-box;
	position: relative;
	top: 100px;
	margin-bottom: 20px;
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
