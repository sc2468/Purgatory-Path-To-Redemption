/* eslint-disable global-require */
import React, { useState } from 'react';
import {
  FlatList, Image, ImageBackground, StyleSheet, useWindowDimensions, View,
} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useDispatch } from 'react-redux';
import CharacterOverviewCard from '../components/CharacterOverviewCard';
// import WithScreenBreakPoint from '../components/WithScreenBreakPoint';
import { navigateToAction, startGameAction } from '../store/actions';
import { screens, AVAILABLE_CHARACTERS, SMALL_SCREEN_BREAK_POINT } from './constances';

const stylesCreator = (width) => StyleSheet.create({
  listContainer: {
    flex: 1,
    flexBasis: 1,
    flexGrow: -1,
    paddingTop: 5,
    paddingBottom: 5,
  },
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
  const Large = width > SMALL_SCREEN_BREAK_POINT;
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
            // ToDo use redux thunk to make this nicer
            dispatch(startGameAction(selectedCharacters));
            dispatch(navigateToAction(screens.MAIN_GAME));
          }
        }
        />
      </View>

      {/* Create its own component for this */}
      <View style={styles.listContainer}>
        {Large && (
        <FlatList
          scrollEnabled
          data={AVAILABLE_CHARACTERS}
          keyExtractor={(item) => item.id}
          columnWrapperStyle={{ justifyContent: 'space-between' }}
          renderItem={({ item }) => (
            <CharacterOverviewCard
              id={item.id}
              title={item.name}
              description={item.description}
              characterSelector={characterSelector(item.id)}
              selected={selectedCharacters.includes(item.id)}
            />
          )}
          numColumns={2}
        />
        )}
        {!Large && (
        <FlatList
          data={AVAILABLE_CHARACTERS}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <CharacterOverviewCard
              id={item.id}
              title={item.name}
              description={item.description}
              image={item.image}
              characterSelector={characterSelector(item.id)}
              selected={selectedCharacters.includes(item.id)}
            />
          )}
        />
        )}
      </View>
    </ImageBackground>
  );
}

export default SetupScreen;
