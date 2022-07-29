import React from 'react';
import { Reset } from 'styled-reset';
import './App.css';
import MyPage from './pages/mypage/MyPage';
import Main from './pages/main/Main.jsx';
import { Routes, Route } from 'react-router-dom';
import Login from './pages/login/Login.jsx';
import LoginForEmail from './pages/login/LoginForEmail.jsx';
import Writing from './pages/writing/Writing';
import View from './pages/writing/View';
import Signup from './pages/login/Signup.jsx';
import EditProfile from './pages/mypage/EditProfile';
import PasswordCheck from './pages/mypage/PasswordCheck';
import ColorLog from './components/ColorLog';
import Kakao from './pages/login/Kakao.jsx';
import Community from './pages/community/Community';
import CompanionWriting from './pages/community/CompanionWriting';
import QnAWriting from './pages/community/QnAWriting';
import ChangePassword from './pages/mypage/ChangePassword';
import DeleteUser from './pages/mypage/DeleteUser';
import Layout from './Layout';
import Title from './pages/title/Title';
function App() {
	return (
		<div>
			<Reset />
			<Routes>
				<Route element={<Layout />}>
					<Route path="/main" element={<Main />} />
					<Route path="/login" element={<Login />} />
					<Route path="/loginForEmail" element={<LoginForEmail />} />
					<Route path="/signup" element={<Signup />} />
					<Route path="/writing" element={<Writing />} />
					<Route path="/view/:id" element={<View />} />
					<Route path="/mypage" element={<MyPage />} />
					<Route path="/editprofile" element={<EditProfile />} />
					<Route path="/passwordcheck" element={<PasswordCheck />} />
					<Route path="/colorlog" element={<ColorLog />} />
					<Route path="/auth" element={<Kakao />} />
					<Route path="/community" element={<Community />} />
					<Route path="/companion" element={<CompanionWriting />} />
					<Route path="/qna" element={<QnAWriting />} />
					<Route path="/changepassword" element={<ChangePassword />} />
					<Route path="/deleteuser" element={<DeleteUser />} />
				</Route>
				<Route path="/" element={<Title />} />
			</Routes>
		</div>
	);
}

export default App;
