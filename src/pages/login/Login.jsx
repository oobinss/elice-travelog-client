import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import KakaoLogin from './KakaoLogin.jsx';

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
const EmailLoginButton = styled(NavLink)`
	display: block;
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
	text-decoration: none;
	color: #fff;
	border: none;
	border-radius: 22px;
`;

const SignupButton = styled(NavLink)`
	color: #5f6caf;
	text-decoration: none;
	font-size: 1rem;
	position: relative;
	bottom: -9rem;
	left: 13rem;
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
