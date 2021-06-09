import React from 'react';
import { View } from 'react-native';
import { Title } from 'react-native-paper';
import { MaterialCommunityIcons } from 'react-native-vector-icons';

export default function MinorStatDisplay({
  strength, intelligence, agility, characterColor,
}) {
  return (
    <View style={{ flexDirection: 'column', paddingRight: 10 }}>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <MaterialCommunityIcons name="dumbbell" size={30} color={characterColor} />
        <Title style={{ color: 'white' }}>{strength.current}</Title>
      </View>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <MaterialCommunityIcons name="brain" size={30} color={characterColor} />
        <Title style={{ color: 'white' }}>{intelligence.current}</Title>
      </View>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <MaterialCommunityIcons name="run-fast" size={30} color={characterColor} />
        <Title style={{ color: 'white' }}>{agility.current}</Title>
      </View>
    </View>
  );
}
