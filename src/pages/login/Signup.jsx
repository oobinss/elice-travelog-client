import React, { useState } from 'react';
import styled from 'styled-components';

const SignupSection = styled.section`
	width: 100vw;
	height: 100vw;
	background-color: white;
`;
const SignupContainer = styled.article`
	width: 30rem;
	height: 35rem;
	margin: 6rem auto;
	box-shadow: 1px 1px 22px 2px rgba(0, 0, 0, 0.25);
	border-radius: 38px;
`;
const SignupHeader = styled.h2`
	color: #5f6caf;
	font-size: 2rem;
	position: relative;
	top: 3rem;
	left: 12rem;
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
const InvalidInput = styled.p`
	font-size: 0.7rem;
	color: #ff8364;
	position: relative;
	top: 4.8rem;
	left: 6.8rem;
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
