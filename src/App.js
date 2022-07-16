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

function App() {
	return (
		<div className="App">
			<RecoilRoot>
				<Reset />
				<Navbar />
				<Routes>
					<Route path="/" element={<Main />} />
					<Route path="/login" element={<Login />} />
					<Route path="/loginForEmail" element={<LoginForEmail />} />
					<Route path="/signup" element={<Signup />} />
					<Route path="/writing" element={<Writing />} />
				</Routes>
			</RecoilRoot>
		</div>
	);
}

export default App;
