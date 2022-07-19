import React from 'react';
import { useRecoilValue } from 'recoil';
import { loginState } from '../recoil/Atom';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const Nav = styled.nav`
	width: 100vw;
	height: 5rem;
	background-color: #fff;
	display: flex;
	align-items: center;
	justify-content: space-between;
	box-shadow: 0px 1px 10px rgba(0, 0, 0, 0.2);
`;
const LogoContainer = styled.h1`
	width: 4rem;
	height: 3rem;
	background-color: #5f6caf;
	margin-left: 0.7rem;
	text-align: center;
	line-height: 3rem;
	color: #fff;
	cursor: pointer;
`;

const NavUl = styled.ul`
	display: flex;
	align-items: center;
	margin-right: 3rem;
`;
const NavLi = styled.li`
	margin: 0 2rem;
	color: #5f6caf;
`;
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
`;

function Navbar() {
	const isLoggedIn = useRecoilValue(loginState);
	return (
		<Nav>
			<LogoContainer
				onClick={() => {
					window.location.href = '/';
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
						<LoginBtn to="/">logout</LoginBtn>
					</NavLi>
				)}
			</NavUl>
		</Nav>
	);
}

export default Navbar;
