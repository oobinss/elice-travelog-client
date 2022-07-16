import React, { useState } from 'react';
import styled from 'styled-components';

const SignupSection = styled.section`
	width: 100vw;
	height: 100vw;
	background-color: white;
`;
const SignupContainer = styled.article`
	width: 500px;
	height: 550px;
	margin: 100px auto;
	box-shadow: 1px 1px 22px 2px rgba(0, 0, 0, 0.25);
	border-radius: 38px;
`;
const SignupHeader = styled.h2`
	color: #5f6caf;
	font-size: 30px;
	position: relative;
	top: 50px;
`;
const SignupInput = styled.input`
	width: 300px;
	height: 40px;
	padding: 15px;
	box-sizing: border-box;
	position: relative;
	top: 100px;
	margin-bottom: 25px;
	color: #5f6caf;
	background-color: #edf7fa;
	border-radius: 10px;
	border: none;
`;
const SignupButton = styled.button`
	display: block;
	width: 300px;
	height: 55px;
	font-size: 18px;
	text-align: center;
	line-height: 55px;
	margin-bottom: 25px;
	position: relative;
	top: 130px;
	left: 100px;
	background-color: #5f6caf;
	color: #fff;
	border: none;
	border-radius: 22px;
`;
const InvalidInput = styled.p`
	font-size: 13px;
	color: #ff8364;
	position: relative;
	top: 80px;
	left: -50px;
	&: nth-of-type(2) {
		left: -70px;
	}
`;

function Signup() {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [passwordConfirm, setPasswordConfirm] = useState('');

	const emailValidation = ['@', '.'].every(str => email.includes(str));
	const passwordValidation = password.length >= 8 ? false : true;
	const passwordConfirmValidation = password == passwordConfirm ? false : true;

	const handleSubmit = e => {
		if (name === '' || !emailValidation || passwordValidation || passwordConfirmValidation) {
			return e.preventDefault();
		} else {
			console.log('successs');
		}
	};

	return (
		<SignupSection>
			<SignupContainer>
				<SignupHeader>회원가입</SignupHeader>
				<form>
					<SignupInput
						name="name"
						value={name}
						onChange={e => {
							setName(e.target.value);
						}}
						placeholder="이름을 입력해 주세요."
					/>
					<SignupInput
						name="email"
						value={email}
						onChange={e => {
							setEmail(e.target.value);
						}}
						placeholder="이메일을 입력해 주세요."
					/>
					{!emailValidation && <InvalidInput> * 이메일 형식이 올바르지 않습니다.</InvalidInput>}
					<SignupInput
						name="password"
						value={password}
						type="password"
						onChange={e => {
							setPassword(e.target.value);
						}}
						placeholder="비밀번호를 입력해 주세요."
					/>
					{passwordValidation && <InvalidInput> * 8자 이상 입력해 주세요.</InvalidInput>}
					<SignupInput
						name="passwordConfirm"
						value={passwordConfirm}
						type="password"
						onChange={e => {
							setPasswordConfirm(e.target.value);
						}}
						placeholder="비밀번호를 다시 입력해 주세요."
					/>
					{passwordConfirmValidation && (
						<InvalidInput> * 비밀번호가 일치하지 않습니다.</InvalidInput>
					)}
					<SignupButton onClick={handleSubmit}>회원가입</SignupButton>
				</form>
			</SignupContainer>
		</SignupSection>
	);
}

export default Signup;
