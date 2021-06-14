/* eslint-disable global-require */
import React, { useEffect, useCallback, useMemo } from 'react';
import {
  Text, Image, ImageBackground, StyleSheet, View, TouchableHighlight,
} from 'react-native';
import { Audio } from 'expo-av';
import { useDispatch } from 'react-redux';
import { screens } from './constances';
import { navigateToAction } from '../store/actions';

const styles = StyleSheet.create({
  backgroundImage: {
    height: '100%',
    width: '100%',
    resizeMode: 'cover',
  },
  background: {
    height: '100%',
    width: '100%',
    backgroundColor: 'black',
  },
  title: {
    flex: 4,
    width: '100%',
  },
  subTitle: {
    width: '80%',
    flex: 1,
    height: 50,
  },
});

function LandingScreen() {
  const dispatch = useDispatch();

  const soundObject = useMemo(() => new Audio.Sound(), []);

  const playSound = useCallback(
    async () => {
      try {
        await soundObject.loadAsync(require('../assets/audio/wind-howl.mp3'));
        await soundObject.setIsLoopingAsync(true);
        await soundObject.playAsync();
        // Your sound is playing!

        // Don't forget to unload the sound from memory
        // when you are done using the Sound object
        //
      } catch (error) {
        // An error occurred!
        console.log(error);
      }
    },
    [soundObject],
  );
  // async () => {
  //   try {
  //     await soundObject.loadAsync(require('../assets/audio/wind-howl.mp3'));
  //     await soundObject.setIsLoopingAsync(true);
  //     await soundObject.playAsync();
  //     // Your sound is playing!

  //     // Don't forget to unload the sound from memory
  //     // when you are done using the Sound object
  //     //
  //   } catch (error) {
  //     // An error occurred!
  //     console.log(error);
  //   }
  // };

  useEffect(() => {
    playSound();
    return async () => {
      await soundObject.unloadAsync();
    };
  }, [playSound, soundObject]);

  return (
    <TouchableHighlight
      style={styles.background}
      onPress={() => dispatch(navigateToAction(screens.SETUP))}
    >
      <ImageBackground
        style={styles.backgroundImage}
        source={require('../assets/snow.gif')}
        resizeMode="stretch"
      >
        <View style={{ flex: 1 }} />
        <View style={{ flex: 2, alignItems: 'center' }}>
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
        </View>
        <View style={{ flex: 1, justifyContent: 'center' }}>
          <Text style={{ fontSize: 100, color: 'blue' }} title="Start" onPress={() => dispatch(navigateToAction(screens.SETUP))} />
        </View>
      </ImageBackground>
    </TouchableHighlight>
  );
}

export default LandingScreen;
