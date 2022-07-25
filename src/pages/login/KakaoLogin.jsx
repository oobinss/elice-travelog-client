import React, { useEffect } from 'react'
import styled from 'styled-components'
import { KAKAO_AUTH_URL } from './OAuth'
import axios from 'axios'

const KakaoLogin = () => {
  const RedirectForAuth = e => {
    window.location.assign(KAKAO_AUTH_URL)
  }
  return <SocialButton onClick={RedirectForAuth}>카카오로 로그인</SocialButton>
}

export default KakaoLogin

// import React, { useEffect } from 'react'
// import styled from 'styled-components'
// import axios from 'axios'

// const { Kakao } = window

// const loginWithKakao = e => {
//   window.location.href = 'http://localhost:8000/api/users/kakao'
// const scope = 'profile_nickname, profile_image, account_email, age_range'

// Kakao.Auth.login({
//   scope,
//   //success는 인증 정보를 응답(response)로 받음
//   success: function (response) {
//     //카카오 SDK에 사용자 토큰을 설정한다.
//     window.Kakao.Auth.setAccessToken(response.access_token)
//     console.log(`is set?: ${window.Kakao.Auth.getAccessToken()}`)

//     var ACCESS_TOKEN = window.Kakao.Auth.getAccessToken()
//   },
//   fail: function (error) {
//     console.log(error)
//   },
// })
// }

// const KakaoLogin = () => {
//   useEffect(() => {
//     if (!Kakao.isInitialized()) {
//       Kakao.init(process.env.REACT_APP_KAKAO_LOGIN_API_KEY)
//     }

//     console.log(Kakao.isInitialized())
//   }, [])
//   return <SocialButton onClick={loginWithKakao}>카카오로 로그인</SocialButton>
// }

// export default KakaoLogin

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
`
