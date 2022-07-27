import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import DaumPostcodeEmbed from 'react-daum-postcode';
import { NavLink, useNavigate } from 'react-router-dom';
import { S3Upload, S3getFileURL, S3deleteObject } from '../../components/S3';

const SignupSection = styled.section`
  width: 100vw;
  height: 100vw;
  background-color: white;
`;
const SignupContainer = styled.article`
  width: 30rem;
  height: 48rem;
  margin: 6rem auto;
  box-shadow: 1px 1px 22px 2px rgba(0, 0, 0, 0.25);
  border-radius: 38px;
`;
const SignupHeader = styled.h2`
  color: #5f6caf;
  font-size: 2rem;
  position: relative;
  top: 3rem;
  left: 8rem;
`;
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
`;
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
`;

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
`;
const NavUl = styled.ul`
  display: flex;
  align-items: center;
  margin-right: 3rem;
`;
const NavLi = styled.li`
  margin: 0 2rem;
  color: #5f6caf;
`;
const MenuUl = styled(NavUl)`
  display: flex;
  flex-direction: column;
  position: absolute;
  width: 15vw;
  box-shadow: 0px 1px 10px rgba(0, 0, 0, 0.2);
  text-align: center;
  left: -0.5rem;
  top: 11rem;
  background-color: #edf7fa;
`;
const MenuLi = styled(NavLi)`
  color: #5f6caf;
  margin: 0;
  height: 3rem;
  width: 15vw;
  line-height: 3rem;
  color: black;
  cursor: pointer;
  font-size: 22px;
  &:hover {
    background-color: #5f6caf;
    color: #ffffff;
  }
`;

function EditProfile() {
  const [editname, setEditName] = useState('');
  const [editnickname, setEditNickname] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [popup, setPopup] = useState('false');
  const [address, setAddress] = useState('');
  const [address2, setAddress2] = useState('');
  const [profileImage, setProfileImage] = useState('');
  const navigate = useNavigate();
  let userData = {};
  useEffect(() => {
    getUserData();
    console.log(userData.data);
  }, []);

  //axios bearer token
  const token = window.localStorage.getItem('token');
  let config = {
    headers: { Authorization: `Bearer ${token}` },
  };

  //기존 데이터 불러오기
  async function getUserData() {
    try {
      userData = await axios.get('http://localhost:8000/api/users/user', config).then(e => e.data);
    } catch (err) {
      alert(err);
    }
  }
  const handleSubmit = async e => {
    e.preventDefault();

    const fileKey = profileImage.name;
    S3Upload(profileImage);
    const profileImg = S3getFileURL(`upload/${fileKey}`);

    S3deleteObject(fileKey);

    let resultData = { ...userData, phoneNumber, address };
    editname && (resultData.name = editname);
    editnickname && (resultData.nickname = editnickname);

    //변경된 값으로 수정
    try {
      await axios({
        method: 'patch',
        url: `http://localhost:8000/api/users/${resultData.id}`,
        headers: { Authorization: `Bearer ${token}` },
        data: {
          name: resultData.name,
          nickname: resultData.nickname,
          phoneNumber: resultData.phoneNumber,
          address: resultData.address,
          age: resultData.age,
          //          profileImg:profileImg,
        },
      });
      alert('정보가 변경되었습니다.');
      navigate('/mypage');
    } catch (err) {
      alert(err.stack);
    }
  };

  //DaumPostcode
  const handleComplete = data => {
    let fullAddress = data.address;
    let extraAddress = '';

    if (data.addressType === 'R') {
      if (data.bname !== '') {
        extraAddress += data.bname;
      }
      if (data.buildingName !== '') {
        extraAddress += extraAddress !== '' ? `, ${data.buildingName}` : data.buildingName;
      }
      fullAddress += extraAddress !== '' ? ` (${extraAddress})` : '';
    }
    setAddress(fullAddress);
  };

  const postCodeStyle = {
    display: 'block',
    position: 'absolute',
    top: '50%',
    width: '30vw',
    height: '30vh',
    padding: '7px',
    left: '30%',
    zIndex: 100,
  };

  return (
    <>
      <MenuUl>
        <MenuLi>
          <NavLink to="/editprofile">회원정보 수정</NavLink>
        </MenuLi>
        <MenuLi>
          <NavLink to="/changepassword">비밀번호 변경</NavLink>
        </MenuLi>

        <MenuLi>
          <NavLink to="/deleteuser">회원탈퇴</NavLink>
        </MenuLi>
      </MenuUl>
      <SignupSection>
        <SignupContainer>
          <SignupHeader>회원 정보 수정</SignupHeader>
          <form>
            <SignupInput
              name="name"
              value={editname}
              onChange={e => {
                setEditName(e.target.value);
              }}
              placeholder="이름을 입력해 주세요."
            />
            <SignupInput
              name="nickname"
              value={editnickname}
              onChange={e => {
                setEditNickname(e.target.value);
              }}
              placeholder="닉네임을 입력해 주세요."
            />
            <SignupInput
              name="phonenumber"
              value={phoneNumber}
              placeholder="휴대폰 번호를 입력해 주세요."
              onChange={e => {
                setPhoneNumber(e.target.value);
              }}
            />
            <SignupInput
              name="address"
              defaultValue={address}
              placeholder="주소를 입력해 주세요."
            />
            <AddressButton
              onClick={e => {
                e.preventDefault();
                setPopup(!popup);
              }}
            >
              주소 찾기
              {!popup && (
                <DaumPostcodeEmbed style={postCodeStyle} onComplete={handleComplete} autoClose />
              )}
            </AddressButton>
            <SignupInput
              type="text"
              value={address2}
              name="address2"
              onChange={e => {
                setAddress2(e.target.value);
              }}
              placeholder="상세 주소를 입력해 주세요."
            />

            <SignupInput
              type="file"
              name="profileImage"
              onChange={e => {
                const file = e.target.files[0];
                setProfileImage(file);
              }}
            />

            <SignupButton onClick={handleSubmit}>변경</SignupButton>
          </form>
        </SignupContainer>
      </SignupSection>
    </>
  );
}

export default EditProfile;
