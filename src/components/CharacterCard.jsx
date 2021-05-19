import React from 'react';
import {
  Card, Checkbox,
} from 'react-native-paper';

function characterCard(props) {
  const { title, description, image } = props;
  return (
    <Card>
      <Card.Cover source={image} style={{ width: 800, height: 500 }} />
      <Card.Title title={title} subtitle={description} />
      <Card.Actions>
        <Checkbox.Item label="select" status="checked" />
      </Card.Actions>
    </Card>
  );
}

export default characterCard;
