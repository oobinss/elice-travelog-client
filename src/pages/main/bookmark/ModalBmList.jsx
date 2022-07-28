import React from 'react';
import { MdStars } from 'react-icons/md';
import { useRecoilValue } from 'recoil';
import { bookmarkListState } from '../../../recoil/Atom';
function ModalBmList({ currentList, setCurrentList }) {
	const bmList = useRecoilValue(bookmarkListState);

	function handleListColor(e) {
		const id = e.target.id;
		currentList.includes(bmList[id])
			? setCurrentList(currentList.filter(number => number != bmList[id]))
			: setCurrentList([...currentList, bmList[id]]);
	}

	return (
		<>
			{bmList.map((data, i) => (
					<div
						key={Math.random()}
						id={i}
						className={currentList.includes(bmList[i]) ? 'listBtn on' : 'listBtn'}
						onClick={handleListColor}
					>
						<MdStars color="#ffb877" id="btnStar" size="24" />
						{data}
					</div>
			))}
		</>
	);
}

export default ModalBmList;
