import React from 'react';
import Sidebar from './Sidebar.jsx';
import Extendbar from './Extendbar.jsx';
import Bookmarkbar from './bookmark/Bookmarkbar.jsx';
import Map from '../../components/Map.jsx';
import SelectBmList from './bookmark/SelectBmList.jsx';
import { useRecoilState, useRecoilValue } from 'recoil';
import { detailInfoState, showBmListState } from '../../recoil/Atom';
import PlaceInfoExtend from './PlaceInfoExtend.jsx';

function Main() {
	const showBmList = useRecoilValue(showBmListState);
	const detailInfo = useRecoilValue(detailInfoState);
	return (
		<>
			<Sidebar />
			<Map />
			{detailInfo == '' ? null : <PlaceInfoExtend />}
			<Extendbar />
			<Bookmarkbar />
			{showBmList && <SelectBmList setShowBmList={showBmList} />}
		</>
	);
}

export default Main;
