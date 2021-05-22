/* eslint-disable global-require */
import React from 'react';
import {
  Button,
  FlatList, ImageBackground, StyleSheet, View,
} from 'react-native';
import { Title } from 'react-native-paper';
import { useDispatch } from 'react-redux';
import CharacterCard from '../components/CharacterCard';
import { navigateToAction, startGameAction } from '../store/actions';
import { screens, AVAILABLE_CHARACTERS } from './constances';

const styles = StyleSheet.create({
  list: {
    maxWidth: 1000,
    width: '100%',
    flex: 1,
    // flexBasis: 1,
    padding: 10,
  },
  background: {
    alignItems: 'center',
    // width: '100%',
    // height: '100%',
    flex: 1,
  },
});

function SetupScreen() {
  const dispatch = useDispatch();
  return (
    <ImageBackground source={require('../assets/characters/character-background.jpg')} style={styles.background}>
      <Title>Character Selection</Title>
      <FlatList
        data={AVAILABLE_CHARACTERS}
        keyExtractor={(item) => item.id}
        numColumns={2}
        renderItem={({ item }) => (
          <CharacterCard
            title={item.name}
            description={item.description}
            image={item.image}
          />
        )}
        style={styles.list}
        columnWrapperStyle={{ justifyContent: 'space-between' }}
        ItemSeparatorComponent={() => (
          <View style={{ padding: 20 }} />
        )}
      />
      <Button
        title="Start Game"
        style={{ width: '100%', paddingTop: 10 }}
        onPress={() => {
          // ToDo use redux thunk to make this nicer
          dispatch(startGameAction([1, 2, 3, 4]));
          dispatch(navigateToAction(screens.MAIN_GAME));
        }}
      />
    </ImageBackground>
  );
}

export default SetupScreen;
