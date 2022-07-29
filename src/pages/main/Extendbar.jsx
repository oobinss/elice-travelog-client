import React from 'react';
import Searchbar from './Searchbar';
import PlaceInfo from '../../components/PlaceInfo';
import SetModalBtn from '../../components/SetModalBtn';
import BookmarkModal from './bookmark/BookmarkModal';
import styled from 'styled-components';
import { useRecoilState, useRecoilValue } from 'recoil';
import { extendbarState, addBookmarkState } from '../../recoil/Atom';

function Extendbar() {
	const [close, setClose] = useRecoilState(extendbarState);
	const addBookmark = useRecoilValue(addBookmarkState);
	function handleExtendbar() {
		setClose(!close);
	}

	return (
		<ExtendbarStyle>
			<div className={close ? 'extendbar close' : 'extendbar'}>
				<Searchbar />
				<PlaceInfo />
				<SetModalBtn function={handleExtendbar} />
			</div>
			{addBookmark && <BookmarkModal />}
		</ExtendbarStyle>
	);
}

const ExtendbarStyle = styled.div`
	position: absolute;
	z-index: 6;
	border-right: 1px solid rgb(219, 219, 219);
	.extendbar {
		display: flex;
		flex-flow: column;
		position: absolute;
		top: 0;
		left: 4rem;
		width: 25rem;
		height: 91.5vh;
		background-color: #fafafa;
		transition: 0.5s ease-in-out;
	}

	.close {
		left: -20.6rem;
		transition: 0.3s ease-in-out;
	}
`;

export default Extendbar;
