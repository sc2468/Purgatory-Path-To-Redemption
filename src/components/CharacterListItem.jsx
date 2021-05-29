/* eslint-disable react/destructuring-assignment */
import React from 'react';
import { Image, View } from 'react-native';
import { Card, Paragraph, Title } from 'react-native-paper';
import { characterIconSelector } from '../utilities/imageLoader';

export default function CharacterListItem(props) {
  const {
    id, name, health, salvation,
  } = props.item;
  return (
    // flexDirection: 'row'
    <Card>
      <Image source={characterIconSelector(id)} style={{ height: 200, width: 200 }} />
      <View style={{}}>
        <Title>{name}</Title>
        <Paragraph>{health}</Paragraph>
        <Paragraph>{salvation}</Paragraph>
      </View>
    </Card>

  );
}
