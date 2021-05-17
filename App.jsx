/* eslint-disable global-require */
import React, { useState } from 'react';
import {
  StyleSheet, Platform, StatusBar, SafeAreaView,
} from 'react-native';
import LandingScreen from './src/screens/LandingScreen';
import screens from './src/screens/screens';
import SetupGameScreen from './src/screens/SetupGameScreen';
import BoardGameScreen from './src/screens/BoardGameScreen';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    justifyContent: 'center',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
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
