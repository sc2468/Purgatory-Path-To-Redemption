/* eslint-disable global-require */
import React from 'react';
import { Title } from 'react-native-paper';
import BoardGameController from '../components/BoardGameController';
import GameActionController from '../components/GameActionController';
import GameActionDisplay from '../components/GameActionDisplay';
import BoardGameDisplay from '../components/BoardGameDisplay';
import PageWithTitle from '../components/PageWithTitle';

function BoardGameScreen() {
  return (
    <PageWithTitle
      HeaderComponent={<Title>Header</Title>}
      BodyComponent={<BoardGameController BoardGameDisplay={BoardGameDisplay} />}
      FooterComponent={<GameActionController DisplayComponent={GameActionDisplay} />}
      backgroundImage={require('../assets/boardGame/old-paper.jpg')}
    />
  );
}

export default BoardGameScreen;
