/* eslint-disable global-require */
import React from 'react';
import {
  Text, StyleSheet, View,
} from 'react-native';

// const styles = StyleSheet.create({
//   background: {
//     height: '100%',
//     width: '100%',
//     resizeMode: 'cover',
//   },
//   title: {
//     flex: 4,
//     width: '100%',
//   },
//   subTitle: {
//     width: '80%',
//     flex: 1,
//     height: 50,
//   },
// });

function SetupScreen() {
  return (
    <View style={{ flex: 1 }}>
      <Text>This is the board game page</Text>
    </View>
  );
}

export default SetupScreen;
