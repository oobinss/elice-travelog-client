import React, { useEffect } from 'react'
import styled from 'styled-components'
import { ImSearch } from 'react-icons/im'
import { useRecoilState } from 'recoil'
import { placeState, mainInputValueState } from '../../recoil/Atom'

function Searchbar() {
  const [mainInputValue, setMainInputValue] = useRecoilState(mainInputValueState)
  const [, setPlace] = useRecoilState(placeState)

  useEffect(() => {
    const url = new URL(window.location.href)
    const params = url.searchParams
    if (params.get('place') !== null) {
      setMainInputValue(params.get('place'))
      setPlace(mainInputValue)
    }
  }, [])

  const onChange = e => {
    setMainInputValue(e.target.value)
  }

  const handleSubmit = e => {
    e.preventDefault()
    setPlace(mainInputValue)
  }

  return (
    <SearchBarContainer>
      <form className="searchbar" onSubmit={handleSubmit}>
        <input
          className="searchPlace"
          placeholder="Search Place..."
          onChange={onChange}
          value={mainInputValue}
        />
        <button type="submit" className="searchBtn">
          <ImSearch />
        </button>
      </form>
    </SearchBarContainer>
  )
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
`

export default Searchbar
