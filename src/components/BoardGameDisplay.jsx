/* eslint-disable react/prop-types */
import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import { Title } from 'react-native-paper';
import CharacterListItem from './CharacterListItem';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  separator: {
    height: 10,
    backgroundColor: 'blue',
  },
});

function BoardGameDisplay(props) {
  const { characters } = props;
  const characterList = Object.keys(characters).map(
    (key) => ({ id: Number(key), ...characters[key] }),
  );
  return (
    <View style={styles.container}>
      <View style={{ width: '100%' }}>header</View>
      <FlatList
        data={characterList}
      // need to toString this as having a number of a key creates an error
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (<CharacterListItem item={item} />)}
        // ItemSeparatorComponent={() => <View style={styles.separator} />}
        contentContainerStyle={{
          flexGrow: 1,
        }}
      />
    </View>
  );
}

export default BoardGameDisplay;
