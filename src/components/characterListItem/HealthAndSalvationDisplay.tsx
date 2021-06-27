import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Title } from 'react-native-paper';
import { specialStatProp, statValueProp } from '../../constances/typesConstances';
import { statIconSelector } from '../../utilities/imageLoader';
import IconWithText from '../atons/IconWithText';

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
  salvation?: statValueProp,
  specialStat?: specialStatProp,
};

export default function HealthAndSalvationDisplay({
  name, characterColor, health, salvation, specialStat
}: Props) {
  return (
    <View style={styles.detailsContainer}>
      <View style={styles.header}>
        <Title style={{ color: 'white' }}>{name}</Title>
      </View>
      <View style={styles.data}>
        <IconWithText
          iconColor={characterColor}
          iconName={statIconSelector("health")}
          iconSize={50}
          text={health.current.toString()}
        />
        {salvation && <IconWithText
          iconColor={characterColor}
          iconName={statIconSelector("salvation")}
          iconSize={50}
          text={salvation.current.toString()}
        />}
        {specialStat && (<IconWithText
          iconColor={characterColor}
          iconName={statIconSelector(specialStat.name)}
          iconSize={50}
          text={specialStat.current.toString()}
        />)}
      </View>
    </View>
  );
}
