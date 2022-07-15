import React from 'react';
import styled from 'styled-components';
import { ImSearch } from 'react-icons/im';
import { useRecoilState } from 'recoil'
import { placeState, mainInputValueState } from '../recoil/Atom';

// debounce 추후 구현 예정
function debounce(func, timeout) {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func.apply(this, args)
    }, timeout)
  }
}

function Searchbar() {
  const [mainInputValue, setmainInputValue] = useRecoilState(mainInputValueState);
  const [place, setPlace] = useRecoilState(placeState);
  const onChange = (e) => {
    setmainInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setPlace(mainInputValue);
    console.log({ place });
  };

  return (
    <SearchBarContainer>
      <form className='searchbar' onSubmit={ handleSubmit }>
            <input className='searchPlace' 
              placeholder='Search Place...'
              onChange={onChange}
              value={mainInputValue}
            />
            <button type='submit' className='searchBtn'><ImSearch /></button>
      </form>
    </SearchBarContainer>
  );
}

const SearchBarContainer = styled.div`

    .searchbar {
      display: flex;
      justify-self: center;
      margin: 15px 20px;
      height: 40px;
      width: 250px;
      background-color: white;
    }

    .searchPlace {
      border: none;
      flex-grow: 3;
  
    }
  
    .searchPlace:focus {
      outline: none;
  
    }
  
    .searchBtn {
        justify-self: end;
        margin-top: 2px;
        flex-grow: 1;
        flex-basis: 20px;
        transform: scale(1.5);
        border: none;
        background-color: transparent;
        cursor: pointer;
    }
`;

export default Searchbar;