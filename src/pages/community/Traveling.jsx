import React from 'react';
import TravelPost from '../../components/TravelPost';
import ColorLogPageComponents from '../../components/ColorLogPageComponents';
import { useRecoilState } from 'recoil';
import { colorLogState } from '../../recoil/Atom';

function Traveling() {
  const [buttonClick, setButtonClick] = useRecoilState(colorLogState);

  const handleButtonClick = () => {
    setButtonClick(true);
  };
  return (
    <div>
      <button onClick={handleButtonClick}> open colorlog </button>
      <TravelPost />
      {buttonClick && <ColorLogPageComponents></ColorLogPageComponents>}
    </div>
  );
}

export default Traveling;
