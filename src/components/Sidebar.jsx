import React from 'react';
import styled from 'styled-components';
import Extendbar from './Extendbar';
import { BiRestaurant } from 'react-icons/bi';
import { ImSearch, ImLibrary } from 'react-icons/im';
import { IoMdCafe } from 'react-icons/io';
import { TbStar } from 'react-icons/tb';
import { useRecoilState } from 'recoil';
import { extendbarState, placeState, mainInputValueState } from '../recoil/Atom';

function Sidebar() {
	const [close, setClose] = useRecoilState(extendbarState);
	const [, setPlace] = useRecoilState(placeState);
	const [mainInputValue] = useRecoilState(mainInputValueState);

	return (
		<SidebarStyle>
			<div className="sidebar">
				<div className="filterBox">
					<div className="searchBox">
						<ImSearch
							className="icon"
							style={{ marginTop: '30px', backgroundColor: '#d9d9d9' }}
							onClick={() => setClose(!close)}
						/>
					</div>
					<div className="restaurantBox">
						<BiRestaurant
							className="icon"
							style={{ backgroundColor: '#0029fe' }}
							onClick={() => {
								setPlace(mainInputValue + ' 맛집');
							}}
						/>
					</div>
					<div className="landmarkBox">
						<ImLibrary
							className="icon"
							style={{ backgroundColor: '#039b00' }}
							onClick={() => {
								setPlace(mainInputValue + ' 관광지');
							}}
						/>
					</div>
					<div className="cafeBox">
						<IoMdCafe
							className="icon"
							style={{ backgroundColor: '#e05836' }}
							onClick={() => {
								setPlace(mainInputValue + ' 카페');
							}}
						/>
					</div>
					<div className="favoriteBox">
						<TbStar className="icon" style={{ backgroundColor: '#ffb877' }} />
					</div>
				</div>
				<Extendbar />
			</div>
		</SidebarStyle>
	);
}

const SidebarStyle = styled.div`
	left: 0;
	width: 70px;

	.sidebar {
		float: left;
		position: relative;
		background-color: #ffffff;
		font-size: 1.5rem;
		line-height: 48px;
		transition: 0.3s ease-in-out;
		height: calc(100vh - 80px);
		z-index: 5;
	}

	.filterBox {
		display: flex;
		flex-flow: column;
	}

	.icon {
		margin: 10px;
		padding: 10px;
		border-radius: 5px;
		color: white;
	}

	.icon:hover {
		transform: scale(1.1);
		opacity: 0.8;
	}

	.icon:active {
		filter: invert(80%);
	}
`;

export default Sidebar;
