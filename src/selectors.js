import { selector } from 'recoil'
import { gameScore } from './atoms';

export const paperSize = selector({
  key: 'papersize',
  get: ({ get }) => {
    const score = get(gameScore);
    return 100 + (score * 5)
  }

})