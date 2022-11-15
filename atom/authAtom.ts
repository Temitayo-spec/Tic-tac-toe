import { atom } from 'recoil';

export const authAtom = atom({
  key: 'authAtom',
  default: {
    loading: false,
    error: false,
  },
});
