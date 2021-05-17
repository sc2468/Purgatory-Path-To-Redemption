/* eslint-disable global-require */
import React from 'react';
import { useDeviceOrientation } from '@react-native-community/hooks';
import {
  Image, ImageBackground, StyleSheet, TouchableHighlight,
} from 'react-native';
import PropTypes from 'prop-types';
import screens from './screens';

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
  title: {
    width: '100%',
    padding: 0,
  },
  subTitle: {
    width: '80%',
    height: 50,
  },
});

function LandingScreen(props) {
  const { routeToNewPage } = props;
  const orientation = useDeviceOrientation();
  return (
    <TouchableHighlight onPress={() => routeToNewPage(screens.setUp)}>
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

LandingScreen.propTypes = {
  routeToNewPage: PropTypes.func.isRequired,
};

export default LandingScreen;
