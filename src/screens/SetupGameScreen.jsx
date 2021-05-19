/* eslint-disable global-require */
import React from 'react';
import {
  Button,
  FlatList, ImageBackground, StyleSheet, View,
} from 'react-native';
import { Title } from 'react-native-paper';
import CharacterCard from '../components/CharacterCard';

const styles = StyleSheet.create({
  list: {
    maxWidth: 1000,
    flex: 1,
    flexBasis: 1,
  },
  background: {
    flex: 1,
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },
});

const AVAILABLE_CHARACTERS = [
  {
    id: '1', name: 'Prisoner Turned Preacher', description: 'need to add', image: require('../assets/characters/preacher.png'),
  },
  {
    id: '2', name: 'Adrenalin Junky', description: 'need to add', image: require('../assets/characters/adrenalin-junky.png'),
  },
  {
    id: '3', name: 'The Scientist', description: 'need to add', image: require('../assets/characters/scientist.png'),
  },
  {
    id: '4', name: 'The Angry CEO', description: 'need to add', image: require('../assets/characters/angry-ceo.jpg'),
  },
];

function SetupScreen() {
  return (
    <ImageBackground source={require('../assets/characters/character-background.jpg')} style={styles.background}>
      <Title>Character Selection</Title>
      <FlatList
        data={AVAILABLE_CHARACTERS}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <CharacterCard
            title={item.name}
            description={item.description}
            image={item.image}
          />
        )}
        style={styles.list}
        ItemSeparatorComponent={() => <View style={{ padding: 20 }} />}
      />
      <Button title="Start Game" style={{ width: '100%', paddingTop: 10 }} />
    </ImageBackground>
  );
}

export default SetupScreen;
