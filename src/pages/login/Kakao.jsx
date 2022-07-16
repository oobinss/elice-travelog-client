import React, { useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';

const { Kakao } = window;

const loginWithKakao = () => {
	const scope = 'profile_nickname, profile_image, account_email, age_range';
	Kakao.Auth.login({
		scope,
		//success는 인증 정보를 응답(response)로 받음
		success: function (response) {
			//카카오 SDK에 사용자 토큰을 설정한다.
			window.Kakao.Auth.setAccessToken(response.access_token);
			console.log(`is set?: ${window.Kakao.Auth.getAccessToken()}`);

			var ACCESS_TOKEN = window.Kakao.Auth.getAccessToken();

			window.Kakao.API.request({
				url: '/v2/user/me',
				success: function ({ kakao_account }) {
					console.log(kakao_account);
					const { email, profile } = kakao_account;
					console.log(email);
					console.log(`responsed img: ${profile.profile_image_url}`);
					console.log(profile.nickname);

					axios({
						method: 'post',
						url: '/oauth',
						data: {
							id: email,
							nickname: profile.nickname,
							image: profile.profile_image_url,
						},
					})
						.then(res => {
							console.log(res);
						})
						.catch(err => {
							console.error(err);
						});
				},
				fail: function (error) {
					console.log(error);
				},
			});
		},
		fail: function (error) {
			console.log(error);
		},
	});
};

const KakaoLogin = () => {
	useEffect(() => {
		if (!Kakao.isInitialized()) {
			Kakao.init('4250425773c5e88299b3b27481abdace');
		}
		console.log(Kakao.isInitialized());
	}, []);
	return (
		<div>
			<SocialButton onClick={loginWithKakao}>카카오로 로그인</SocialButton>
		</div>
	);
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
