/* eslint-disable react/prop-types */
import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import { characterType, monsterType } from '../constances/typesConstances';
import CharacterListItem from './characterListItem/CharacterListItem';
import EntityListItem from './characterListItem/EntityListItem';

const styles = StyleSheet.create({
  listContainer: {
    flex: 1,
    flexBasis: 1,
    flexGrow: -1,
    paddingTop: 5,
    paddingBottom: 5,
    width: '100%',
  },
  separator: {
    padding: 10,
  },
});

export type Props = {
  characters: { [key: string]: characterType }
};

function BoardGameDisplay({ characters }: Props) {
  // needs to be ordered by turn order
  const characterList = Object.keys(characters).map(
    (key) => ({ ...characters[key] as characterType }),
  );

  return (
    <FlatList
      style={styles.listContainer}
      scrollEnabled
      data={characterList}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (<EntityListItem {...item} />)}
      ItemSeparatorComponent={() => <View style={styles.separator} />}
    />
  );
}

export default BoardGameDisplay;
