import React, { useEffect } from 'react'

function Kakao() {
  useEffect(() => {
    const params = new URL(document.location.toString()).searchParams
    const code = params.get('code')
  }, [])
  return <div>Kakao</div>
}

export default Kakao
