import React from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faToiletPaper } from '@fortawesome/free-solid-svg-icons';
import { gameScore } from '../atoms';
import { paperSize } from '../selectors';
import { useResetScore } from '../actionhooks';

const Game = () => {
  const [score, setScore] = useRecoilState(gameScore);
  const size = useRecoilValue(paperSize);
  const [resetScore]  = useResetScore();

  const paperClick = () => {
    setScore(score + 1);
  };

  return (
    <div>
      <button
        style={{
          fontSize: size,
          cursor: 'pointer',
          background: 'transparent',
          border: 0,
        }}
        onClick={paperClick}
      >

        <FontAwesomeIcon icon={faToiletPaper} />
      </button>

      <button onClick={()=>resetScore()}>Reset</button>
    </div>
  );
};

export default Game;
