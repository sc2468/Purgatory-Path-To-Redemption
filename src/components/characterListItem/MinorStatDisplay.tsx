import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Title } from 'react-native-paper';
import { MaterialCommunityIcons } from 'react-native-vector-icons';
import { statValueProp } from '../../constances/typesConstances';

const styles = StyleSheet.create({
  icon: {
    paddingRight: 5
  },
});

export type Props = {
  strength: statValueProp,
  intelligence: statValueProp,
  agility: statValueProp,
  characterColor: string,
};

export default function MinorStatDisplay({
  strength, intelligence, agility, characterColor,
}: Props) {
  return (
    <View style={{ flexDirection: 'column', paddingRight: 10, }}>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <MaterialCommunityIcons name="dumbbell" size={30} color={characterColor} style={styles.icon} />
        <Title style={{ color: 'white' }}>{strength.current}</Title>
      </View>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <MaterialCommunityIcons name="brain" size={30} color={characterColor} style={styles.icon} />
        <Title style={{ color: 'white' }}>{intelligence.current}</Title>
      </View>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <MaterialCommunityIcons name="run-fast" size={30} color={characterColor} style={styles.icon} />
        <Title style={{ color: 'white' }}>{agility.current}</Title>
      </View>
    </View>
  );
}
