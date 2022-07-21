import React from 'react';
import { Reset } from 'styled-reset';
import './App.css';
import Main from './pages/main/Main.jsx';
import { Routes, Route } from 'react-router-dom';
import Login from './pages/login/Login.jsx';
import LoginForEmail from './pages/login/LoginForEmail.jsx';
import Writing from './pages/writing/Writing';
import Navbar from './components/Navbar.jsx';
import Signup from './pages/login/Signup.jsx';
import { RecoilRoot, atom, selector, useRecoilState, useRecoilValue } from 'recoil';
import Title from './pages/title/Title.jsx';
<<<<<<< HEAD
import ColorLog from './components/ColorLog';
=======
import Kakao from './pages/login/Kakao.jsx';
>>>>>>> 1be7b7026f6f1de9b78cada1a34ce54bcc8c5b4e

function App() {
	return (
		<div>
			<RecoilRoot>
				<Reset />
				{window.location.pathname !== '/' && <Navbar />}
				<Routes>
					<Route path="/" element={<Title />} />
					<Route path="/main" element={<Main />} />
					<Route path="/login" element={<Login />} />
					<Route path="/loginForEmail" element={<LoginForEmail />} />
					<Route path="/signup" element={<Signup />} />
					<Route path="/writing" element={<Writing />} />
<<<<<<< HEAD
					<Route path="/colorlog" element={<ColorLog />} />
=======
					<Route path="/oauth" element={<Kakao />} />
>>>>>>> 1be7b7026f6f1de9b78cada1a34ce54bcc8c5b4e
				</Routes>
			</RecoilRoot>
		</div>
	);
}

export default App;
