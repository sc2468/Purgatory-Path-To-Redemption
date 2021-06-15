import React from 'react';
import { View } from 'react-native';
import { Paragraph } from 'react-native-paper';
import { MaterialCommunityIcons } from 'react-native-vector-icons';
import { useDispatch } from 'react-redux';
import { changeCharacterStat } from '../../store/actions';
import { statIconSelector } from '../../utilities/imageLoader';
import { statValueProp } from '../../constances/typesConstances';

export type Props = {
  characterId: string,
  statName: string,
  statValue: statValueProp,
  color: string,
};

function CharacterStatisticChanger({
  characterId, statName, statValue, color,
}: Props) {
  const dispatch = useDispatch();
  return (
    <View style={{ flexDirection: 'row', alignItems: 'center', paddingHorizontal: 5 }}>
      <MaterialCommunityIcons name={statIconSelector(statName)} size={30} color={color} />
      <MaterialCommunityIcons name="minus" size={30} color="red" onPress={() => dispatch(changeCharacterStat(characterId, statName, statValue.current - 1))} />
      <Paragraph style={{ color: 'white' }}>{`${statValue.current}/${statValue.max}`}</Paragraph>
      <MaterialCommunityIcons name="plus" size={30} color="green" onPress={() => dispatch(changeCharacterStat(characterId, statName, statValue.current + 1))} />
    </View>
  );
}

export default CharacterStatisticChanger;
