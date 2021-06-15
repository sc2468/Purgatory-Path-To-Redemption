import React from 'react';
import { StyleSheet, useWindowDimensions } from 'react-native';
import {
  Card, Paragraph, Title,
} from 'react-native-paper';
import PropTypes from 'prop-types';
import { characterImageSelector } from '../utilities/imageLoader';
import { isSmallScreen } from '../constances/displayConstances';

const styles = StyleSheet.create({
  container: {
    margin: 10,
    flex: 1,
  },

  unselectedImage: {
    opacity: 0.5,
  },
  cover: {
    resizeMode: 'contain',
  },
  highLight: {
    shadowRadius: 10,
  }
});

export type Props = {
  id: string,
  title: string,
  description: string,
  characterSelector: () => {},
  selected: Boolean,
};

function CharacterOverviewCard({
  id, title, description, characterSelector, selected,
}: Props) {
  const { width } = useWindowDimensions();
  const smallScreenWidth = isSmallScreen(width) ? width : width / 2;

  return (
    <Card
      style={[styles.container, { maxWidth: smallScreenWidth * 0.9 },
      selected ? styles.highLight : null,
      ]}
      onPress={characterSelector}
    >
      <Card.Cover
        source={characterImageSelector(id)}
        style={
          [
            styles.cover,
            { width: smallScreenWidth * 0.9, height: smallScreenWidth * 0.7 },
            !selected && styles.unselectedImage,
          ]
        }
      />
      <Card.Content>
        <Title>{title}</Title>
        <Paragraph>{description}</Paragraph>
      </Card.Content>
    </Card>
  );
}

CharacterOverviewCard.prototype = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  characterSelector: PropTypes.func.isRequired,
  selected: PropTypes.bool.isRequired,
};

export default CharacterOverviewCard;
