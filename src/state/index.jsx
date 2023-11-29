import { atom } from 'recoil';

export const currentStateState = atom({
  key: 'currentStateState',
  default: -1,
});

export const autoPlayState = atom({
  key: 'autoPlayState',
  default: true,
});


// export const muteState = atom({
//   key: 'muteStateState',
//   default: true,
// });