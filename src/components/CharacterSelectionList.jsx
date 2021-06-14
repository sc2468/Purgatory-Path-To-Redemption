import React from 'react';
import PropTypes from 'prop-types';
import {
  FlatList, StyleSheet, useWindowDimensions, View,
} from 'react-native';
import { AVAILABLE_CHARACTERS, SMALL_SCREEN_BREAK_POINT } from '../screens/constances';
import CharacterOverviewCard from './CharacterOverviewCard';

const styles = StyleSheet.create({
  listContainer: {
    flex: 1,
    flexBasis: 1,
    flexGrow: -1,
    paddingTop: 5,
    paddingBottom: 5,
  },
});

export default function CharacterSelectionList({ characterSelector, selectedCharacters }) {
  const { width } = useWindowDimensions();
  const Large = width > SMALL_SCREEN_BREAK_POINT;

  return (
    <View style={styles.listContainer}>
      {Large && (
        <FlatList
          data={AVAILABLE_CHARACTERS}
          keyExtractor={(item) => `largeListItem-${item.id}`}
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
          columnWrapperStyle={Large ? { justifyContent: 'space-between' } : undefined}
        />
      )}
      {!Large && (
        <FlatList
          data={AVAILABLE_CHARACTERS}
          keyExtractor={(item) => `smallListItem-${item.id}`}
          renderItem={({ item }) => (
            <CharacterOverviewCard
              id={item.id}
              title={item.name}
              description={item.description}
              characterSelector={characterSelector(item.id)}
              selected={selectedCharacters.includes(item.id)}
            />
          )}
        />
      )}
    </View>
  );
}

CharacterSelectionList.propTypes = {
  characterSelector: PropTypes.func.isRequired,
  selectedCharacters: PropTypes.arrayOf(PropTypes.number).isRequired,
};
