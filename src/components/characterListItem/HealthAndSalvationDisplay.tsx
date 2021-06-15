import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Title } from 'react-native-paper';
import { MaterialCommunityIcons } from 'react-native-vector-icons';
import { statValueProp } from '../../constances/typesConstances';

const styles = StyleSheet.create({
  detailsContainer: {
    flexGrow: 1,
    flex: 1,
    paddingLeft: 10,
    justifyContent: 'center',
  },
  data: {
    flexGrow: 1,
    flexDirection: 'row',
  },
  header: {}
});

export type Props = {
  name: string,
  characterColor: string,
  health: statValueProp,
  salvation: statValueProp,
};

export default function HealthAndSalvationDisplay({
  name, characterColor, health, salvation,
}: Props) {
  return (
    <View style={styles.detailsContainer}>
      <View style={styles.header}>
        <Title style={{ color: 'white' }}>{name}</Title>
      </View>
      <View style={styles.data}>
        <View style={{ flexDirection: 'row', alignItems: 'center', paddingRight: 10 }}>
          <MaterialCommunityIcons name="heart" size={50} color={characterColor} style={{ paddingRight: 5 }} />
          <Title style={{ color: 'white' }}>{health.current}</Title>
        </View>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <MaterialCommunityIcons name="book-cross" size={50} color={characterColor} />
          <Title style={{ color: 'white' }}>{salvation.current}</Title>
        </View>
      </View>
    </View>
  );
}
