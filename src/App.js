import React from 'react';
import { Reset } from 'styled-reset';
import './App.css';
import MyPage from './pages/mypage/MyPage';
import Main from './pages/main/Main.jsx';
import { Routes, Route } from 'react-router-dom';
import Login from './pages/login/Login.jsx';
import LoginForEmail from './pages/login/LoginForEmail.jsx';
import Writing from './pages/writing/Writing';
import Navbar from './components/Navbar.jsx';
import Signup from './pages/login/Signup.jsx';
import { RecoilRoot, atom, selector, useRecoilState, useRecoilValue } from 'recoil';
import Title from './pages/title/Title.jsx';
import EditProfile from './pages/mypage/EditProfile';
import PasswordCheck from './pages/mypage/PasswordCheck';
import ColorLog from './components/ColorLog';
import Kakao from './pages/login/Kakao.jsx';
<<<<<<< HEAD
import S3 from './components/S3';
=======

>>>>>>> 5d2ae1f9ce382623f3e532551e93d38f94a276e0
import Community from './pages/community/Community';
import CompanionWriting from './pages/community/CompanionWriting';
import QnAWriting from './pages/community/QnAWriting';
import ChangePassword from './pages/mypage/ChangePassword';
<<<<<<< HEAD
=======
import DeleteUser from './pages/mypage/DeleteUser';
>>>>>>> 5d2ae1f9ce382623f3e532551e93d38f94a276e0
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
        </Routes>
      </RecoilRoot>
    </div>
  );
}

export default App;
