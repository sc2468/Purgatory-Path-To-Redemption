import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Title } from 'react-native-paper';
import { MaterialCommunityIcons } from 'react-native-vector-icons';

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
});

export default function HealthAndSalvationDisplay({
  name, characterColor, health, salvation,
}) {
  return (
    <View style={styles.detailsContainer}>
      <View style={styles.header}>
        <Title style={{ color: 'white' }}>{name}</Title>
      </View>
      <View style={styles.data}>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <MaterialCommunityIcons name="heart" size={50} color={characterColor} />
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
