/* eslint-disable global-require */
import React from 'react';
import { Title } from 'react-native-paper';
import BoardGameController from '../components/BoardGameController';
import BoardGameDisplay from '../components/BoardGameDisplay';
import PageWithTitle from '../components/PageWithTitle';

function BoardGameScreen() {
  return (
    <PageWithTitle
      HeaderComponent={<Title>Header</Title>}
      BodyComponent={(<BoardGameController BoardGameDisplay={BoardGameDisplay} />)}
      backgroundImage={require('../assets/boardGame/old-paper.jpg')}
    />
  );
}

export default BoardGameScreen;
