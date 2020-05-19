import React from 'react';
import { useRecoilValue } from 'recoil';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGem } from '@fortawesome/free-solid-svg-icons';

import { gameScore } from '../atoms';

const Gems = () => {
  const score = useRecoilValue(gameScore);
  return (
    <div>
      {
        [...Array(score)].map((x, y) => (<span key={y}> <FontAwesomeIcon icon={faGem} /></span>))
     }
    </div>
  );
};

export default Gems;
