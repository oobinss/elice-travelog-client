import React, { useState } from 'react';
import SearchbarIntro from '../../components/SearchbarIntro';
import PostBox from '../../components/PostBox';
import { useRecoilState } from 'recoil';
import { communityState } from '../../recoil/Atom';
import CommunityModal from '../../components/CommunityModal';

function Companion() {
  const [inputValue, setInputValue] = useState('');
  const [postClick, setPostClick] = useRecoilState(communityState);

  const handleChange = e => {
    setInputValue(e.target.value);
  };
  const handleClick = () => {
    console.log(inputValue);
  };
  return (
    <>
      <SearchbarIntro
        title=""
        containerWidth="45rem"
        containerHeight="5rem"
        inputWidth="25rem"
        inputLeft="4rem"
        inputTop="0rem"
        searchTop="0.3rem"
        visibleOption="visible"
        clickurl="companion"
        value={inputValue}
        changeMethod={handleChange}
        clickMethod={handleClick}
      />
      <PostBox title="testtesttest" name="sojeong" content=" 같이 갈사람 괌" />
      {postClick && <CommunityModal></CommunityModal>}
    </>
  );
}

export default Companion;
