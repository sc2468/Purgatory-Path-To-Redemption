import React from 'react';
import { View } from 'react-native';
import { Paragraph } from 'react-native-paper';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useDispatch } from 'react-redux';
import { changeCharacterStat } from '../../store/actions';
import { statIconSelector } from '../../utilities/iconLoader';
import { statValueProp } from '../../constances/typesConstances';

export type Props = {
  characterId: string,
  statName: string,
  statId: string,
  statValue: statValueProp,
  color: string,
};

function SpecialStatSlider({
  characterId, statName, statValue, color, statId
}: Props) {
  const dispatch = useDispatch();
  return (
    <View style={{ flexDirection: 'row', alignItems: 'center', paddingHorizontal: 5 }}>
      <MaterialCommunityIcons name={statIconSelector(statName)} size={30} color={color} />
      <MaterialCommunityIcons name="minus" size={30} color="red" onPress={() => dispatch(changeCharacterStat(characterId, statId, statValue.current - 1))} />
      <Paragraph style={{ color: 'white' }}>{`${statValue.current}/${statValue.max}`}</Paragraph>
      <MaterialCommunityIcons name="plus" size={30} color="green" onPress={() => dispatch(changeCharacterStat(characterId, statId, statValue.current + 1))} />
    </View>
  );
}

export default SpecialStatSlider;
