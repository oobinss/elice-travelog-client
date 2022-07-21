import React, { useState } from 'react';
import PostBox from '../../components/PostBox';
import SearchbarIntro from '../../components/SearchbarIntro';
import TabMenu from '../../components/TabMenu';

function Companion() {
	const [inputValue, setInputValue] = useState('');

	const handleChange = e => {
		setInputValue(e.target.value);
	};
	const handleClick = () => {
		console.log(inputValue);
	};
	return (
		<div>
			<TabMenu />
			<SearchbarIntro
				title=""
				containerWidth="60rem"
				containerHeight="5rem"
				inputWidth="40rem"
				titlePadding="0"
				value={inputValue}
				changeMethod={handleChange}
				clickMethod={handleClick}
			/>
			<PostBox />
		</div>
	);
}

export default Companion;
