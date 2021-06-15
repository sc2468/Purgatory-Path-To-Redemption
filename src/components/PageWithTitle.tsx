/* eslint-disable global-require */
import React, { ReactElement } from 'react';
import { ImageBackground, ImageSourcePropType, StyleSheet, View } from 'react-native';

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

export type Props = {
  HeaderComponent: ReactElement,
  BodyComponent: ReactElement,
  backgroundImage: ImageSourcePropType,
};

function PageWithTitle(props: Props) {
  const { HeaderComponent, BodyComponent, backgroundImage } = props;
  return (
    <ImageBackground source={backgroundImage} style={styles.background}>
      <View style={styles.header}>
        {HeaderComponent}
      </View>
      {BodyComponent}
    </ImageBackground>
  );
}

export default PageWithTitle;
