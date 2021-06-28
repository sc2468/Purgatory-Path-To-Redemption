import { MaterialCommunityIcons } from '@expo/vector-icons';
import React from 'react'
import { StyleSheet, View } from 'react-native';
import { Title } from 'react-native-paper';

const styles = StyleSheet.create({
  icon: {
    paddingRight: 2,
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingRight: 10,
  },
  text: {
    color: 'white'
  }
});

export type Props = {
  text: string,
  iconName: React.ComponentProps<typeof MaterialCommunityIcons>['name'],
  iconSize: number,
  iconColor: string,
};


export default function IconWithText({ text, iconName, iconSize, iconColor }: Props) {
  return (
    <View style={styles.container}>
      <MaterialCommunityIcons name={iconName} size={iconSize} color={iconColor} style={styles.icon} />
      <Title style={styles.text}>{text}</Title>
    </View>
  )
}
