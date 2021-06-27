/* eslint-disable react/prop-types */
import React from 'react';
import { Button, StyleSheet, View } from 'react-native';

const styles = StyleSheet.create({
});

export type Props = {
  endTurnAction: () => {};
  currentCharactersTurn: string;
};

export default function GameActionDisplay({ currentCharactersTurn, endTurnAction }: Props) {
  return (<View>
    <Button onPress={endTurnAction} title={'EndTurn' + currentCharactersTurn} />
  </View>)
}


