import React, { useState } from 'react'
import styled from 'styled-components'
import axios from 'axios'
import DaumPostcodeEmbed from 'react-daum-postcode'

const SignupSection = styled.section`
  width: 100vw;
  height: 100vw;
  background-color: white;
`
const SignupContainer = styled.article`
  width: 30rem;
  height: 48rem;
  margin: 6rem auto;
  box-shadow: 1px 1px 22px 2px rgba(0, 0, 0, 0.25);
  border-radius: 38px;
`
const SignupHeader = styled.h2`
  color: #5f6caf;
  font-size: 2rem;
  position: relative;
  top: 3rem;
  left: 8rem;
`
const SignupInput = styled.input`
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
`
const SignupButton = styled.button`
  display: block;
  width: 18rem;
  height: 3.2rem;
  font-size: 1rem;
  text-align: center;
  line-height: 3.2rem;
  margin-bottom: 1.5rem;
  position: relative;
  top: 8rem;
  left: 6rem;
  background-color: #5f6caf;
  color: #fff;
  border: none;
  border-radius: 22px;
`

const AddressButton = styled.button`
  width: 6rem;
  height: 3.2rem;
  font-size: 1rem;
  text-align: center;
  line-height: 3.2rem;
  margin-bottom: 1.5rem;
  position: relative;
  top: 6rem;
  left: 6rem;
  background-color: #5f6caf;
  color: #fff;
  border: none;
  border-radius: 22px;
`

function EditProfile() {
  const [name, setName] = useState('')
  const [nickname, setNickname] = useState('')
  const [phonenumber, setPhoneNumber] = useState('')
  const [popup, setPopup] = useState('false')
  const [address, setAddress] = useState('')
  const [address2, setAddress2] = useState('')
  const [profileImage, setProfileImage] = useState('')
  const formData = new FormData()

  const handleSubmit = async e => {
    e.preventDefault()

    //모든 유효성 검사를 통과한다면 백에 회원가입 요청
    try {
      const data = { name, nickname, phonenumber, address, address2, formData }
      await axios({
        method: 'post',
        url: 'http://localhost:8000/api/users/register',
        data: data,
      })
      window.location.href = '/login'
    } catch (err) {
      console.error(err.stack)
      alert(`문제가 발생하였습니다. 확인 후 다시 시도해 주세요: ${err.message}`)
    }
  }

  //DaumPostcode
  const handleComplete = data => {
    let fullAddress = data.address
    let extraAddress = ''

    if (data.addressType === 'R') {
      if (data.bname !== '') {
        extraAddress += data.bname
      }
      if (data.buildingName !== '') {
        extraAddress += extraAddress !== '' ? `, ${data.buildingName}` : data.buildingName
      }
      fullAddress += extraAddress !== '' ? ` (${extraAddress})` : ''
    }
    setAddress(fullAddress)
  }

  const postCodeStyle = {
    display: 'block',
    position: 'absolute',
    top: '50%',
    width: '30vw',
    height: '30vh',
    padding: '7px',
    left: '30%',
    zIndex: 100,
  }

  return (
    <SignupSection>
      <SignupContainer>
        <SignupHeader>회원 정보 수정</SignupHeader>
        <form>
          <SignupInput
            name="name"
            value={name}
            onChange={e => {
              setName(e.target.value)
            }}
            placeholder="이름을 입력해 주세요."
          />
          <SignupInput
            name="nickname"
            onChange={e => {
              setNickname(e.target.value)
            }}
            placeholder="닉네임을 입력해 주세요."
          />
          <SignupInput
            name="phonenumber"
            placeholder="휴대폰 번호를 입력해 주세요."
            onChange={e => {
              setPhoneNumber(e.target.value)
            }}
          />
          <SignupInput name="address" placeholder="주소를 입력해 주세요." value={address} />
          <AddressButton
            onClick={e => {
              e.preventDefault()
              setPopup(!popup)
            }}
          >
            주소 찾기
            {!popup && (
              <DaumPostcodeEmbed style={postCodeStyle} onComplete={handleComplete} autoClose />
            )}
          </AddressButton>
          <SignupInput
            type="text"
            name="address2"
            onChange={e => {
              setAddress2(e.target.value)
            }}
            placeholder="상세 주소를 입력해 주세요."
          />
          <SignupInput
            type="file"
            name="image"
            onChange={e => {
              formData.append('images', e.target.files[0])
            }}
          />
          <SignupButton onClick={handleSubmit}>변경</SignupButton>
        </form>
      </SignupContainer>
    </SignupSection>
  )
}

export default EditProfile
