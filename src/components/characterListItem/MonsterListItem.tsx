/* eslint-disable global-require */
/* eslint-disable react/destructuring-assignment */
import React, { useState } from 'react';
import {
  Image, ImageBackground, StyleSheet, TouchableHighlight, View,
} from 'react-native';
import { statNames } from '../../constances/gameConstances';
import { characterColorSelector, characterPortraitSelector } from '../../utilities/imageLoader';
import CharacterStatisticChanger from './CharacterStatistic';
import SpecialStatSlider from './SpecialStatSlider';
import HealthAndSalvationDisplay from './HealthAndSalvationDisplay';
import MinorStatDisplay from './MinorStatDisplay';
import { characterType } from '../../constances/typesConstances';

const styles = StyleSheet.create({
  border: {
    marginVertical: 10,
    marginHorizontal: 3,
    borderWidth: 3,
    shadowRadius: 10,
    shadowOpacity: 10,
    borderRadius: 10,
    overflow: 'hidden',
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
    borderRadius: 10,
  },
});

export type Props = characterType;


export default function MonsterListItem(props: Props) {
  const [expand, setExpand] = useState(false);
  const { id, name, health, specialStat } = props;
  const characterColor = characterColorSelector(id);
  return (
    <ImageBackground
      source={require('../../assets/boardGame/character-item-background.jpg')}
      imageStyle={{ borderRadius: 10 }}
      style={styles.background}
    >
      <View style={[styles.overlay, { backgroundColor: characterColor }]} />
      <View style={[styles.border, { borderColor: characterColor, shadowColor: characterColor }]}>
        <TouchableHighlight onPress={() => setExpand(!expand)}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Image
              source={characterPortraitSelector(id)}
              style={{
                height: 110,
                width: 110,
              }}
            />
            <View style={{ flexDirection: 'row', padding: 10, flexGrow: 1 }}>
              <HealthAndSalvationDisplay
                name={name}
                characterColor={characterColor}
                health={health}
                specialStat={specialStat}
              />
            </View>
          </View>
        </TouchableHighlight>
        {expand && (
          <View style={{ flexDirection: 'row', padding: 5, flexWrap: 'wrap' }}>
            <CharacterStatisticChanger
              key={'health'}
              characterId={id}
              statName={'health'}
              statValue={props['health']}
              color={characterColor}
            />
            {specialStat && (
              <SpecialStatSlider
                characterId={id}
                statId={'specialStat'}
                statName={specialStat.name}
                statValue={specialStat}
                color={characterColor}
              />
            )}
          </View>
        )}
      </View>
    </ImageBackground>
  );
}
