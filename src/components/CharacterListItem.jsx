/* eslint-disable global-require */
/* eslint-disable react/destructuring-assignment */
import React, { useState } from 'react';
import {
  Image, ImageBackground, StyleSheet, TouchableHighlight, View,
} from 'react-native';
import { Paragraph, Title } from 'react-native-paper';
import { MaterialCommunityIcons } from 'react-native-vector-icons';
import { useDispatch } from 'react-redux';
import { changeCharacterStat } from '../store/actions';
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
    paddingHorizontal: 5,
    marginHorizontal: 10,
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
    flexDirection: 'row',
  },
});

export default function CharacterListItem(props) {
  const [expand, setExpand] = useState(false);
  const dispatch = useDispatch();
  const {
    id, name, health, salvation, strength, intelligence, agility,
  } = props.item;
  const characterColor = characterColorSelector(id);
  return (
    <ImageBackground
      source={require('../assets/boardGame/character-item-background.jpg')}
      imageStyle={{ borderRadius: 10 }}
      style={styles.background}
    >

      <View style={[styles.border, { borderColor: characterColor, shadowColor: characterColor }]}>
        <TouchableHighlight onPress={() => setExpand(!expand)}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Image
              source={characterIconSelector(id)}
              style={{
                height: 110,
                width: 110,
                borderTopLeftRadius: 10,
                borderBottomLeftRadius: 10,
              }}
            />
            <View style={{ flexDirection: 'row', padding: 10, flexGrow: 1 }}>
              <View style={styles.detailsContainer}>
                <View style={styles.header}>
                  <Title style={{ color: 'white' }}>{name}</Title>
                </View>
                <View style={styles.data}>
                  <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <MaterialCommunityIcons name="heart" size={50} color="grey" />
                    <Title style={{ color: 'white' }}>{health}</Title>
                  </View>
                  <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <MaterialCommunityIcons name="book-cross" size={50} color="grey" />
                    <Title style={{ color: 'white' }}>{salvation}</Title>
                  </View>
                </View>
              </View>
            </View>
            {/* TODO extract this into a reuseable component */}
            <View style={{ flexDirection: 'column', paddingRight: 10 }}>
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <MaterialCommunityIcons name="dumbbell" size={30} color="grey" />
                <Title style={{ color: 'white' }}>{strength}</Title>
              </View>
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <MaterialCommunityIcons name="brain" size={30} color="grey" />
                <Title style={{ color: 'white' }}>{intelligence}</Title>
              </View>
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <MaterialCommunityIcons name="run-fast" size={30} color="grey" />
                <Title style={{ color: 'white' }}>{agility}</Title>
              </View>
            </View>
          </View>
        </TouchableHighlight>
        {expand && (
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <MaterialCommunityIcons name="heart" size={30} color="red" />
          <MaterialCommunityIcons name="minus" size={30} color="red" onPress={() => dispatch(changeCharacterStat(id, 'health', health - 1))} />
          <Paragraph style={{ color: 'white' }}>{`${health}/15`}</Paragraph>
          <MaterialCommunityIcons name="plus" size={30} color="green" onPress={() => dispatch(changeCharacterStat(id, 'health', health + 1))} />
        </View>
        )}
      </View>
    </ImageBackground>
  );
}
