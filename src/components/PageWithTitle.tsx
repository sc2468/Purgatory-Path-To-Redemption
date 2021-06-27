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
  footer: {
    width: '100%',
  },
});

export type Props = {
  HeaderComponent: ReactElement,
  BodyComponent: ReactElement,
  backgroundImage: ImageSourcePropType,
  FooterComponent: ReactElement,
};

function PageWithTitle(props: Props) {
  const { HeaderComponent, BodyComponent, FooterComponent, backgroundImage } = props;
  return (
    <ImageBackground source={backgroundImage} style={styles.background}>
      <View style={styles.header}>
        {HeaderComponent}
      </View>
      {BodyComponent}
      <View style={styles.footer}>
        {FooterComponent}
      </View>
    </ImageBackground>
  );
}

export default PageWithTitle;
