import React from 'react';
import { BsCaretLeftSquare } from 'react-icons/bs';
import Searchbar from './Searchbar';
import PlaceInfo from './PlaceInfo';
import styled from 'styled-components';
import { useRecoilState } from 'recoil';
import { extendbarState } from '../recoil/Atom';

function Extendbar() {
	const [close, setClose] = useRecoilState(extendbarState);
	return (
		<ExtendbarStyle>
			<div className={close ? 'extendbar close' : 'extendbar'}>
				<Searchbar />
				<div className="infoBoxContainer">
					<PlaceInfo />
				</div>
				<BsCaretLeftSquare id="closeBtn" onClick={() => setClose(true)} />
			</div>
		</ExtendbarStyle>
	);
}

const ExtendbarStyle = styled.div`
	.extendbar {
		display: flex;
		flex-flow: column;
		position: absolute;
		top: -80px;
		left: 64px;
		width: 300px;
		height: 100vh;
		background-color: #edf7fa;
	}

	.close {
		display: none;
	}

	#closeBtn {
		position: absolute;
		top: 50vh;
		transform: scale(1.5);
		color: #5f6caf;
		opacity: 0.9;
		padding: 0;
		left: 260px;
	}

	.infoBoxContainer {
		position: absolute;
		overflow: scroll;
		top: 80px;
	}
`;

export default Extendbar;
