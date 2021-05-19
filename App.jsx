/* eslint-disable global-require */
import React, { useState } from 'react';
import {
  StyleSheet, Platform, SafeAreaView,
} from 'react-native';
import Constants from 'expo-constants';
import LandingScreen from './src/screens/LandingScreen';
import screens from './src/screens/screens';
import SetupGameScreen from './src/screens/SetupGameScreen';
import BoardGameScreen from './src/screens/BoardGameScreen';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    // on IOS the safe area view already sets this padding to this value
    paddingTop: Constants.statusBarHeight,
  },
});

export default function App() {
  const [currentPage, setCurrentPage] = useState(screens.Landing);
  return (
    <SafeAreaView style={styles.container}>
      {currentPage === screens.Landing && (
      <LandingScreen
        routeToNewPage={() => setCurrentPage(screens.setUp)}
      />
      )}
      {currentPage === screens.setUp && <SetupGameScreen />}
      {currentPage === screens.gameBoard && <BoardGameScreen />}

    </SafeAreaView>
  );
}
