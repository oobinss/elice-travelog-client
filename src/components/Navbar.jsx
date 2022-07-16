import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const Nav = styled.nav`
	width: 100%;
	height: 5vh;
	background-color: #fff;
	display: flex;
	align-items: center;
	justify-content: space-between;
  box-s
`;
const LogoContainer = styled.h1`
	width: 50px;
	height: 50px;
	background-color: #5f6caf;
	margin-left: 10px;
	text-align: center;
	line-height: 50px;
	color: #fff;
`;

const NavUl = styled.ul`
	display: flex;
	align-items: center;
	margin-right: 100px;
`;
const NavLi = styled.li`
	margin: 0 30px;
	color: #5f6caf;
`;
const LoginBtn = styled.button`
	width: 80px;
	height: 50px;
	background-color: #5f6caf;
	border: none;
	border-radius: 22px;
	color: #fff;
`;

function Navbar() {
	return (
		<Nav>
			<LogoContainer>
				<NavLink to="/">logo</NavLink>
			</LogoContainer>
			<NavUl>
				<NavLi>
					<NavLink to="/">community</NavLink>
				</NavLi>
				<NavLi>
					<NavLink to="/">my page</NavLink>
				</NavLi>
				<NavLi>
					<LoginBtn>
						<NavLink to="/login">login</NavLink>
					</LoginBtn>
				</NavLi>
			</NavUl>
		</Nav>
	);
}

export default Navbar;
