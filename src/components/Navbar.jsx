import React from 'react';
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
`;

const NavUl = styled.ul`
	display: flex;
	align-items: center;
	margin-right: 6rem;
`;
const NavLi = styled.li`
	margin: 0 2.5rem;
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
					<LoginBtn to="/login">login</LoginBtn>
				</NavLi>
			</NavUl>
		</Nav>
	);
}

export default Navbar;
