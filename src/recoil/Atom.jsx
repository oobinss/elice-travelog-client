import { atom } from 'recoil'

export const placeState = atom({
  key: 'placeState',
  default: '',
})

export const mainInputValueState = atom({
  key: 'mainInputValueState',
  default: '',
})

export const extendbarState = atom({
  key: 'extendbarState',
  default: 'true',
})

export const customState = atom({
  key: 'customState',
  default: 'false',
})

export const bookmarkState = atom({
  key: 'bookmarkState',
  default: [],
})

export const placeInfoState = atom({
  key: 'placeInfoState',
  default: '',
})

export const loginState = atom({
  key: 'loginState',
  default: Boolean(localStorage.getItem('token')),
})

export const iconMenuState = atom({
  key: 'iconMenuState',
  default: false,
})
