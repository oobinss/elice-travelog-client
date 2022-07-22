import React, { useEffect } from 'react'
import { useRecoilState } from 'recoil'
import { loginState, iconMenuState } from '../recoil/Atom'
import styled from 'styled-components'
import { NavLink, useNavigate } from 'react-router-dom'

const Nav = styled.nav`
  width: 100vw;
  height: 5rem;
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0px 1px 10px rgba(0, 0, 0, 0.2);
`
const LogoContainer = styled.h1`
  width: 4rem;
  height: 3rem;
  background-color: #5f6caf;
  margin-left: 0.7rem;
  text-align: center;
  line-height: 3rem;
  color: #fff;
  cursor: pointer;
`

const NavUl = styled.ul`
  display: flex;
  align-items: center;
  margin-right: 3rem;
`
const NavLi = styled.li`
  margin: 0 2rem;
  color: #5f6caf;
`
const MenuUl = styled(NavUl)`
  display: flex;
  flex-direction: column;
  position: absolute;
  width: 200px;
  border: 1px solid blue;
  text-align: center;
  right: -2.5rem;
  background-color: #5f6caf;
  color: #fff;
`
const MenuLi = styled(NavLi)`
  color: #5f6caf;
  margin: 0;
  height: 3rem;
  width: 10rem;
  line-height: 3rem;
  color: #fff;
  cursor: pointer;
`
const LoginBtn = styled(NavLink)`
  display: block;
  text-align: center;
  line-height: 3rem;
  width: 6rem;
  height: 3rem;
  background-color: #5f6caf;
  border: none;
  border-radius: 22px;
  color: #fff;
`
const NavbarIcon = styled.img`
  border-radius: 50%;
  width: 3rem;
  cursor: pointer;
`

function Navbar() {
  const [isLoggedIn, setIsLoggedIn] = useRecoilState(loginState)
  const [style, setStyle] = useRecoilState(iconMenuState)
  const navigate = useNavigate()
  useEffect(() => {
    if (localStorage.getItem('token')) setIsLoggedIn(true)
    console.log(isLoggedIn)
  }, [])
  return (
    <Nav>
      <LogoContainer
        onClick={() => {
          window.location.href = '/'
        }}
      >
        logo
      </LogoContainer>
      <NavUl>
        <NavLi>
          <NavLink to="/">community</NavLink>
        </NavLi>
        <NavLi>
          <NavLink to="/">my page</NavLink>
        </NavLi>
        {!isLoggedIn ? (
          <NavLi>
            <LoginBtn to="/login">login</LoginBtn>
          </NavLi>
        ) : (
          <NavLi>
            <NavbarIcon
              src="img/default.png"
              onClick={() => {
                setStyle(!style)
              }}
            />
            {style ? (
              <MenuUl>
                <MenuLi>
                  <NavLink to="/editprofile">회원 정보 수정</NavLink>
                </MenuLi>
                <MenuLi>
                  <NavLink to="#">비밀 번호 변경</NavLink>
                </MenuLi>
                <MenuLi>여행 페이지 이동</MenuLi>
                <MenuLi>
                  <NavLink to="/mypage">마이페이지</NavLink>
                </MenuLi>
                <MenuLi>글쓰기</MenuLi>
                <MenuLi
                  onClick={() => {
                    if (window.confirm('로그아웃 하시겠습니까?')) {
                      localStorage.clear()
                      navigate('/login')
                    } else {
                      return
                    }
                  }}
                >
                  로그아웃
                </MenuLi>
              </MenuUl>
            ) : (
              ''
            )}
          </NavLi>
        )}
      </NavUl>
    </Nav>
  )
}

export default Navbar
