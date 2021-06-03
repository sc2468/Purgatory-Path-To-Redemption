/* eslint-disable global-require */
/* eslint-disable react/destructuring-assignment */
import { useDimensions } from '@react-native-community/hooks';
import React from 'react';
import {
  Image, ImageBackground, StyleSheet, useWindowDimensions, View,
} from 'react-native';
import { Paragraph, Title } from 'react-native-paper';
import { characterColorSelector, characterIconSelector } from '../utilities/imageLoader';

const styles = StyleSheet.create({
  border: {
    marginVertical: 10,
    marginHorizontal: 3,
    borderWidth: 3,
    shadowRadius: 20,
    shadowOpacity: 10,
    borderRadius: 10,
  },
  background: {
    borderRadius: 100,
  },
  detailsContainer: {
    flexGrow: 1,
    flex: 1,
    paddingLeft: 10,
    justifyContent: 'center',
  },
  header: {

  },
  data: {
    flexGrow: 1,
    // justifyContent: 'space-between',
  },
});

export default function CharacterListItem(props) {
  const { width } = useWindowDimensions();
  const {
    id, name, health, salvation,
  } = props.item;
  const characterColor = characterColorSelector(id);
  return (
    <ImageBackground
      source={require('../assets/boardGame/character-item-background.jpg')}
      imageStyle={{ borderRadius: 10 }}
      style={styles.background}
    >
      <View style={[styles.border, { flexDirection: 'row' }, { borderColor: characterColor, shadowColor: characterColor }]}>
        <Image
          source={characterIconSelector(id)}
          style={{
            height: 200, width: 200, borderTopLeftRadius: 10, borderBottomLeftRadius: 10,
          }}
        />
        <View style={{ flexDirection: 'row', padding: 10 }}>
          <View style={styles.detailsContainer}>
            <View style={styles.header}>
              <Title style={{ color: 'white' }}>{name}</Title>
            </View>
            <View style={styles.data}>
              <Paragraph style={{ color: 'white' }}>{health}</Paragraph>
              <Paragraph style={{ color: 'white' }}>{salvation}</Paragraph>
            </View>

          </View>
        </View>
      </View>

    </ImageBackground>
  );
}
