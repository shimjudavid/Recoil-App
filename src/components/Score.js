import React from 'react';
import { useRecoilValue } from 'recoil';
import { gameScore } from '../atoms';

const Score = () => {
  const score = useRecoilValue(gameScore);
  return (
    <div>
      <h3> Score: {score} </h3>
    </div>
  );
};

export default Score;
