/* eslint-disable global-require */
import React, { useState } from 'react';
import {
  Image, ImageBackground, StyleSheet, useWindowDimensions, View,
} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useDispatch } from 'react-redux';
import { navigateToAction, startGameAction } from '../store/actions';
import { screens } from '../constances/displayConstances';
import CharacterSelectionList from '../components/CharacterSelectionList';

const stylesCreator = (width) => StyleSheet.create({
  background: {
    alignItems: 'center',
    alignContent: 'center',
    flex: 1,
  },
  header: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    alignContent: 'center',
  },
  title: {
    height: width * 0.1,
    width: width * 0.8,
  },
  arrow: {
    position: 'absolute',
    right: 10,
    color: '#790000',
  },
});

function SetupScreen() {
  const { width } = useWindowDimensions();
  const [selectedCharacters, setSelectedCharacter] = useState([]);
  const dispatch = useDispatch();
  const styles = stylesCreator(width);

  const characterSelector = (id) => () => {
    if (selectedCharacters.includes(id)) {
      setSelectedCharacter(selectedCharacters.filter((selectedId) => selectedId !== id));
    } else {
      setSelectedCharacter((currentSelected) => [...currentSelected, id]);
    }
  };

  return (
    <ImageBackground source={require('../assets/characters/full-image/character-background.jpg')} style={styles.background}>
      <View style={styles.header}>
        <Image source={require('../assets/characterSelection.png')} style={styles.title} resizeMode="contain" />
        <MaterialCommunityIcons
          name="arrow-right"
          size={width * 0.1}
          style={styles.arrow}
          color="Red"
          onPress={
          () => {
            dispatch(startGameAction(selectedCharacters));
            dispatch(navigateToAction(screens.MAIN_GAME));
          }
        }
        />
      </View>
      <CharacterSelectionList
        characterSelector={characterSelector}
        selectedCharacters={selectedCharacters}
      />
    </ImageBackground>
  );
}

export default SetupScreen;
