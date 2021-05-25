/* eslint-disable global-require */
import React from 'react';
import { Provider } from 'react-redux';
import { StyleSheet } from 'react-native';
import store from './src/store';
import MainScreen from './src/screens';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
});

export default function App() {
  return (
    <Provider store={store}>
      <MainScreen style={styles.container} />
    </Provider>
  );
}
