import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import KakaoLogin from './Kakao.js';

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
	left: 211px;
`;
const EmailLoginButton = styled(NavLink)`
	display: block;
	width: 300px;
	height: 55px;
	font-size: 18px;
	text-align: center;
	line-height: 55px;
	position: relative;
	top: 100px;
	left: 100px;
	margin: 15px 0;
	background-color: #5f6caf;
	text-decoration: none;
	color: #fff;
	border: none;
	border-radius: 22px;
`;

const SignupButton = styled(NavLink)`
	color: #5f6caf;
	text-decoration: none;
	font-size: 18px;
	position: relative;
	bottom: -140px;
	left: 220px;
`;

function Login() {
	return (
		<LoginSection>
			<LoginContainer>
				<LoginHeader>로그인</LoginHeader>
				<KakaoLogin />
				<EmailLoginButton to="/loginForEmail">이메일로 로그인</EmailLoginButton>
				<SignupButton to="/signup">회원가입</SignupButton>
			</LoginContainer>
		</LoginSection>
	);
}

export default Login;
