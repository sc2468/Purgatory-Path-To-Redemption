import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';
import Constants from 'expo-constants';
import { screens } from './constances';
import LandingScreen from './LandingScreen';
import { screenSelector } from '../store/selectors';
import SetupGameScreen from './SetupGameScreen';
import BoardGameScreen from './BoardGameScreen';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    // on IOS the safe area view already sets this padding to this value
    paddingTop: Constants.statusBarHeight,
  },
});

export default function MainScreen() {
  const screen = useSelector(screenSelector);
  console.log(screen);
  return (
    <SafeAreaView style={styles.container}>
      {screen === screens.LANDING && (<LandingScreen />)}
      {screen === screens.SETUP && <SetupGameScreen />}
      {screen === screens.MAIN_GAME && <BoardGameScreen />}
    </SafeAreaView>
  );
}
