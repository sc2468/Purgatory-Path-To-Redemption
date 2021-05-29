/* eslint-disable global-require */
import React from 'react';
import {
  Text, ImageBackground, StyleSheet, View, FlatList,
} from 'react-native';
import BoardGameController from '../components/BoardGameController';
import BoardGameDisplay from '../components/BoardGameDisplay';

const styles = StyleSheet.create({
  background: {
    height: '100%',
    width: '100%',
    resizeMode: 'cover',
  },
});

function BoardGameScreen() {
  return (
    <ImageBackground
      style={styles.background}
      source={require('../assets/boardGame/old-paper.jpg')}
      resizeMode="stretch"
    >
      <BoardGameController BoardGameDisplay={BoardGameDisplay} />
    </ImageBackground>
  );
}

export default BoardGameScreen;
