import React from 'react'
import { BsCaretLeftSquare } from 'react-icons/bs'
import Searchbar from './Searchbar'
import PlaceInfo from '../../components/PlaceInfo'
import PlaceInfoExtend from './PlaceInfoExtend'
import styled from 'styled-components'
import { useRecoilState } from 'recoil'
import { extendbarState, detailInfoState } from '../../recoil/Atom'

function Extendbar() {
  const [close, setClose] = useRecoilState(extendbarState)
  const [detailInfo] = useRecoilState(detailInfoState)
  return (
    <ExtendbarStyle>
      <div className={close ? 'extendbar close' : 'extendbar'}>
        <Searchbar />
        <PlaceInfo />
        <BsCaretLeftSquare id="closeBtn" onClick={() => setClose(true)} />
        {detailInfo == '' ? '' : <PlaceInfoExtend />}
      </div>
    </ExtendbarStyle>
  )
}

const ExtendbarStyle = styled.div`
  .extendbar {
    display: flex;
    flex-flow: column;
    position: absolute;
    top: -5rem;
    left: 4rem;
    width: 20rem;
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
`

export default Extendbar
