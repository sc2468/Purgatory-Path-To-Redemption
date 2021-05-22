import React from 'react';
import { StyleSheet } from 'react-native';
import {
  Card, Checkbox, Paragraph, Title,
} from 'react-native-paper';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '45%',
  },
  cover: {
    resizeMode: 'cover', height: 300,
  },
});

function characterCard(props) {
  const { title, description, image } = props;
  return (
    <Card style={styles.container}>
      <Card.Cover
        source={image}
        style={styles.cover}
      />
      <Card.Content>
        <Title>{title}</Title>
        <Paragraph>{description}</Paragraph>
      </Card.Content>
      <Card.Actions>
        <Checkbox.Item label="select" status="checked" />
      </Card.Actions>
    </Card>
  );
}

export default characterCard;
