/* eslint-disable global-require */
/* eslint-disable react/destructuring-assignment */
import React, { useState } from 'react';
import {
  Image, ImageBackground, StyleSheet, TouchableHighlight, View,
} from 'react-native';
import { statNames } from '../screens/constances';
import { characterColorSelector, characterIconSelector } from '../utilities/imageLoader';
import CharacterStatisticChanger from './CharacterStatistic';
import HealthAndSalvationDisplay from './HealthAndSalvationDisplay';
import MinorStatDisplay from './MinorStatDisplay';

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
  overlay: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    opacity: 0.2,
    left: 0,
  },
});

export default function CharacterListItem(props) {
  const [expand, setExpand] = useState(false);
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
      <View style={[styles.overlay, { backgroundColor: characterColor }]} />
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
              <HealthAndSalvationDisplay
                name={name}
                characterColor={characterColor}
                health={health}
                salvation={salvation}
              />
            </View>
            <MinorStatDisplay
              characterColor={characterColor}
              strength={strength}
              intelligence={intelligence}
              agility={agility}
            />
          </View>
        </TouchableHighlight>
        {expand && (
          <View style={{ flexDirection: 'row', padding: 5 }}>
            {statNames.map((statName) => (
              // console.log(statName)
              <CharacterStatisticChanger
                key={statName}
                characterId={id}
                statName={statName}
                statValue={props.item[statName]}
                color={characterColor}
              />
            ))}
          </View>
        )}
      </View>
    </ImageBackground>
  );
}
