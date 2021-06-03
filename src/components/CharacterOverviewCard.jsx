import React from 'react';
import { StyleSheet, useWindowDimensions } from 'react-native';
import {
  Card, Paragraph, Title,
} from 'react-native-paper';
import PropTypes from 'prop-types';
import { isSmallScreen } from '../screens/constances';
import { characterImageSelector } from '../utilities/imageLoader';

const styleGenerator = (width) => StyleSheet.create({
  container: {
    margin: 10,
    flex: 1,
    maxWidth: width * 0.9,
  },

  unselectedImage: {
    opacity: 0.5,
  },
  cover: {
    resizeMode: 'contain',
    height: width * 0.7,
    width: width * 0.9,
  },
});

function CharacterOverviewCard(props) {
  const { width } = useWindowDimensions();
  const smallScreenWidth = isSmallScreen(width) ? width : width / 2;
  const {
    id, title, description, characterSelector, selected,
  } = props;
  const styles = styleGenerator(smallScreenWidth);

  return (
    <Card
      style={[styles.container, selected ? styles.highLight : null]}
      onPress={characterSelector}
    >
      <Card.Cover
        source={characterImageSelector(id)}
        style={[styles.cover, !selected && styles.unselectedImage]}
      />
      <Card.Content>
        <Title>{title}</Title>
        <Paragraph>{description}</Paragraph>
      </Card.Content>
    </Card>
  );
}

CharacterOverviewCard.prototype = {
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.image,
  characterSelector: PropTypes.func,
  selected: PropTypes.bool,
};

export default CharacterOverviewCard;
