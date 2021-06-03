/* eslint-disable global-require */
import React from 'react';
import { ImageBackground, StyleSheet, View } from 'react-native';
// import WithScreenBreakPoint from '../components/WithScreenBreakPoint';

const styles = StyleSheet.create({
  background: {
    alignItems: 'center',
    alignContent: 'center',
    flex: 1,
    width: '100%',
  },
  header: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    alignContent: 'center',
  },
});

function PageWithTitle(props) {
  const { HeaderComponent, BodyComponent, backgroundImage } = props;
  return (
    <ImageBackground source={backgroundImage} style={styles.background}>
      <View style={styles.header}>
        {HeaderComponent}
      </View>
      {/* Create its own component for this */}
      {/* <View style={styles.BodyContainer}> */}
      {BodyComponent}
      {/* </View> */}
    </ImageBackground>
  );
}

export default PageWithTitle;
