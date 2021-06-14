import React from 'react';
import { View } from 'react-native';
import { Paragraph } from 'react-native-paper';
import { MaterialCommunityIcons } from 'react-native-vector-icons';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { changeCharacterStat } from '../store/actions';
import { statIconSelector } from '../utilities/imageLoader';

function CharacterStatisticChanger({
  characterId, statName, statValue, color,
}) {
  const dispatch = useDispatch();
  return (
    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
      <MaterialCommunityIcons name={statIconSelector(statName)} size={30} color={color} />
      <MaterialCommunityIcons name="minus" size={30} color="red" onPress={() => dispatch(changeCharacterStat(characterId, statName, statValue - 1))} />
      <Paragraph style={{ color: 'white' }}>{`${statValue.current}/${statValue.max}`}</Paragraph>
      <MaterialCommunityIcons name="plus" size={30} color="green" onPress={() => dispatch(changeCharacterStat(characterId, statName, statValue + 1))} />
    </View>
  );
}

CharacterStatisticChanger.propTypes = {
  characterId: PropTypes.string.isRequired,
  statName: PropTypes.string.isRequired,
  statValue: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
};

export default CharacterStatisticChanger;
