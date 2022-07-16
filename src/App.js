import React from 'react';
import { Reset } from 'styled-reset';
import './App.css';
import Main from './pages/main/Main.jsx';
import { Routes, Route } from 'react-router-dom';
import Login from './pages/login/Login.jsx';
import LoginForEmail from './pages/login/LoginForEmail.jsx';
import Navbar from './components/Navbar.jsx';
import Signup from './pages/login/Signup.jsx';
import { RecoilRoot, atom, selector, useRecoilState, useRecoilValue } from 'recoil';
import Title from './pages/main/Title.jsx';

function App() {
	return (
		<div className="App">
			<RecoilRoot>
				<Reset />
				{window.location.pathname === '/intro' ? '' : <Navbar />}
				<Routes>
					<Route path="/" element={<Main />} />
					<Route path="/intro" element={<Title />} />
					<Route path="/login" element={<Login />} />
					<Route path="/loginForEmail" element={<LoginForEmail />} />
					<Route path="/signup" element={<Signup />} />
				</Routes>
			</RecoilRoot>
		</div>
	);
}

export default App;
