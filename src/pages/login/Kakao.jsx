import React, { useEffect } from 'react'
//import axios from 'axios';

function Kakao() {
  useEffect(() => {
    const params = new URL(document.location.toString()).searchParams
    const code = params.get('code')
    // const grant_type = 'authorization_code';

    //인가코드
    console.log(code)

    // axios
    // 	.post(
    // 		`https://kauth.kakao.com/oauth/token?grant_type=${grant_type}&client_id=${process.env.REACT_APP_KAKAO_LOGIN_API_KEY}&redirect_uri=http://localhost:3000/oauth/&code=${code}`,
    // 		{
    // 			headers: {
    // 				'Content-type': 'application/x-www-form-urlencoded;charset=utf-8',
    // 			},
    // 		},
    // 	)
    // 	.then(res => {
    // 		console.log(res);
    // 	});
  }, [])
  return <div>Kakao</div>
}

export default Kakao
