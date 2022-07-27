import React, { useState } from 'react';
import SearchbarIntro from '../../components/SearchbarIntro';
import PostBox from '../../components/PostBox';
import { useRecoilState } from 'recoil';
import { communityState } from '../../recoil/Atom';
import CommunityModal from '../../components/CommunityModal';

function Qna() {
  const [inputValue, setInputValue] = useState('');
  const [postClick, setPostClick] = useRecoilState(communityState);

  const handleChange = e => {
    setInputValue(e.target.value);
  };
  const handleClick = () => {};
  return (
    <div>
      <SearchbarIntro
        title=""
        containerWidth="45rem"
        containerHeight="5rem"
        inputWidth="25rem"
        titlePadding="0"
        inputLeft="4rem"
        inputTop="1.5rem"
        searchTop="1.8rem"
        visibleOption="visible"
        clickurl="qna"
        value={inputValue}
        changeMethod={handleChange}
        clickMethod={handleClick}
      />
      <PostBox title="testtesttest" name="anonymous" content="this is question" />
      {postClick && <CommunityModal></CommunityModal>}
    </div>
  );
}

export default Qna;
