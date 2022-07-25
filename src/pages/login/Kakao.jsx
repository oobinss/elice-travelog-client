import React, { useEffect } from 'react';
// import { loginState } from '../../recoil/Atom'
// import { useSetRecoilState } from 'recoil'
import axios from 'axios';

function Kakao() {
  //const setIsLoggedIn = useSetRecoilState(loginState)
  useEffect(() => {
    const params = new URL(document.location.toString()).searchParams;
    const code = params.get('code');
    const grant_type = 'authorization_code';
    const REDIRECT_URI = 'http://localhost:3000/auth';

    console.log(code);
    // async () => {
    //   await axios({
    //     method: 'post',
    //     url: 'http://localhost:8000/api/users/kakao',
    //     data: code,
    //   });
    // };
    // async () => {
    //   const result = await axios.get(`localhost:8000/api/users/kakao`)
    //   console.log(result)
    // },

    // axios
    //   .get(
    //     `https://kauth.kakao.com/oauth/token?grant_type=${grant_type}&client_id=${process.env.REACT_APP_KAKAO_LOGIN_API_KEY}&redirect_uri=${REDIRECT_URI}&code=${code}`,
    //     {
    //       headers: {
    //         'Content-type': 'application/x-www-form-urlencoded;charset=utf-8',
    //       },
    //     },
    //   )
    //   .then(res => {
    //     window.location.href = '/';
    //   });
    //     .then(res => {
    //       console.log(res)
    //       // 로그인 성공시 토큰을 로컬 스토리지에 저장
    //       // 세션이 만료되어도 로그인을 유지하기 위해 로컬 스토리지를 사용
    //       // localStorage.setItem('token', res.data.token)
    //       // setIsLoggedIn(true)

    //       // 로그인 성공하면 redirect
    //       window.location.href = '/'
    //     })
    //     .catch(err => {
    //       alert(err.response.data.error)
    //     }),
    // )
  }, []);
  return <div>Kakao</div>;
}

export default Kakao;
