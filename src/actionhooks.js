import { useRecoilState } from 'recoil';

import { gameScore } from './atoms';

export const useResetScore = () => {
  const [score, setScore] = useRecoilState(gameScore);
  const resetScore = () => {
    setScore(0);
  }
  return [resetScore, score];

}