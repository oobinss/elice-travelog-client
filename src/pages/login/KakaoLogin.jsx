import React, { useEffect } from 'react';
import styled from 'styled-components';
import { KAKAO_AUTH_URL } from './OAuth';
import axios from 'axios';

const KakaoLogin = () => {
	const RedirectForAuth = e => {
		window.location.href = KAKAO_AUTH_URL;
	};
	return <SocialButton onClick={RedirectForAuth}>카카오로 로그인</SocialButton>;
};

export default KakaoLogin;

const SocialButton = styled.button`
	display: block;
	width: 19rem;
	height: 3.2rem;
	font-size: 1rem;
	text-align: center;
	line-height: 3.2rem;
	position: relative;
	top: 5rem;
	left: 5.5rem;
	margin: 0.8rem 0;
	background-color: #f7e317;
	color: #381e1f;
	border: none;
	border-radius: 22px;
`;
