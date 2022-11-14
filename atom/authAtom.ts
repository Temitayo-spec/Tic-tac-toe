import { atom } from 'recoil';

export const authAtom = atom({
  key: 'authAtom',
  default: {
    isAuth: false,
    userId: '',
    username: '',
    email: '',
    hashedPassword: '',
    token: '',
  },
});
