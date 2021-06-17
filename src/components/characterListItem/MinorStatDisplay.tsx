import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Title } from 'react-native-paper';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { specialStatProp, statValueProp } from '../../constances/typesConstances';
import { statIconSelector } from '../../utilities/imageLoader';
import IconWithText from '../atons/IconWithText';

const styles = StyleSheet.create({
  icon: {
    paddingRight: 5
  },
});

export type Props = {
  strength: statValueProp,
  intelligence: statValueProp,
  agility: statValueProp,
  characterColor: string,
};

export default function MinorStatDisplay({
  strength, intelligence, agility, characterColor
}: Props) {
  return (
    <View style={{ flexDirection: 'row', paddingRight: 10, }}>
      <View style={{ flexDirection: 'column' }}>
        <IconWithText
          iconColor={characterColor}
          iconName={statIconSelector("strength")}
          iconSize={30}
          text={strength.current.toString()}
        />
        <IconWithText
          iconColor={characterColor}
          iconName={statIconSelector("intelligence")}
          iconSize={30}
          text={intelligence.current.toString()}
        />
        <IconWithText
          iconColor={characterColor}
          iconName={statIconSelector("agility")}
          iconSize={30}
          text={agility.current.toString()}
        />
      </View >
      <View style={{ flexDirection: 'column', paddingLeft: 10 }}>
        <IconWithText
          iconColor={characterColor}
          iconName={statIconSelector("carryCapacity")}
          iconSize={30}
          text={(strength.current + 2).toString()}
        />
        <IconWithText
          iconColor={characterColor}
          iconName={statIconSelector("cardLimit")}
          iconSize={30}
          text={(intelligence.current + 2).toString()}
        />
        <IconWithText
          iconColor={characterColor}
          iconName={statIconSelector("movement")}
          iconSize={30}
          text={agility.current.toString()}
        />
      </View >
    </View>
  );
}