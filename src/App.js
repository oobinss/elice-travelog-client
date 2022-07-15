import './App.css';
import { Routes, Route } from 'react-router-dom';
import { Reset } from 'styled-reset';
import Login from './pages/login/Login.jsx';
import LoginForEmail from './pages/login/LoginForEmail.jsx';
import Signup from './pages/login/Signup.jsx';

function App() {
	return (
		<div className="App">
			<Reset />
			<Routes>
				<Route path="/login" element={<Login />} />
				<Route path="/loginForEmail" element={<LoginForEmail />} />
				<Route path="/signup" element={<Signup />} />
			</Routes>
		</div>
	);
}

export default App;
