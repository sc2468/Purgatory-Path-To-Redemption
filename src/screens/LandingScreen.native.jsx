/* eslint-disable global-require */
import React from 'react';
import { useDeviceOrientation } from '@react-native-community/hooks';
import {
  Image, ImageBackground, StyleSheet, TouchableHighlight,
} from 'react-native';
import { useDispatch } from 'react-redux';
import { screens } from '../constances/displayConstances';
import { navigateToAction } from '../store/actions';

const styles = StyleSheet.create({
  backgroundLandscape: {
    height: '100%',
    width: '100%',
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center',
  },
  backgroundPortrait: {
    resizeMode: 'cover',
    justifyContent: 'center',
    minHeight: 400,
    alignItems: 'center',
  },
  container: {
    backgroundColor: 'black',
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    width: '100%',
    padding: 0,
  },
  subTitle: {
    width: '80%',
    height: 50,
  },
});

function LandingScreen() {
  const orientation = useDeviceOrientation();
  const dispatch = useDispatch();
  return (
    <TouchableHighlight
      onPress={() => dispatch(navigateToAction(screens.SETUP))}
      style={styles.container}
    >
      <ImageBackground
        style={orientation.landscape ? styles.backgroundLandscape : styles.backgroundPortrait}
        source={require('../assets/snow.gif')}
        resizeMode="stretch"
      >
        <Image
          resizeMode="contain"
          style={styles.title}
          source={require('../assets/purgatory.png')}
        />
        <Image
          resizeMode="contain"
          style={styles.subTitle}
          source={require('../assets/pathToRedemption.png')}
        />
      </ImageBackground>
    </TouchableHighlight>
  );
}

export default LandingScreen;
