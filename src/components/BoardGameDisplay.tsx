/* eslint-disable react/prop-types */
import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import { characterType } from '../constances/typesConstances';
import CharacterListItem from './characterListItem/CharacterListItem';

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
  characters: string[],
};

function BoardGameDisplay({ characters }: Props) {
  const characterList: { [string]: characterType }[] = Object.keys(characters).map(
    (key) => ({ id: Number(key), ...characters[key] as characterType }),
  );
  return (
    <FlatList
      style={styles.listContainer}
      scrollEnabled
      data={characterList}
      // need to toString this as having a number of a key creates an error
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (<CharacterListItem item={item} />)}
      ItemSeparatorComponent={() => <View style={styles.separator} />}
    />
  );
}

export default BoardGameDisplay;
