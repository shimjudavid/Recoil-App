import React from 'react';
import './App.css';
import { RecoilRoot } from 'recoil';

import Game from './components/Game';
import Score from './components/Score';
import Gems from './components/Gems';
const App = () => (
  <RecoilRoot>
    <div className='App'>
      <h1>Paper Click </h1>
      <Score />
      <Game />
      <Gems />
    </div>
  </RecoilRoot>
);

export default App;
