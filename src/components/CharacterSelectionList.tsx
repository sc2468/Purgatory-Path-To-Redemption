import React from 'react';
import {
  FlatList, StyleSheet, useWindowDimensions, View,
} from 'react-native';
import { SMALL_SCREEN_BREAK_POINT } from '../constances/displayConstances';
import { AVAILABLE_CHARACTERS } from '../constances/gameConstances';
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

export type Props = {
  characterSelector: (id: string) => () => {},
  selectedCharacters: string[],
};

export default function CharacterSelectionList({ characterSelector, selectedCharacters }: Props) {
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
