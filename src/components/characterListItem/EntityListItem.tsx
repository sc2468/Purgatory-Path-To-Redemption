import React, { Fragment } from 'react'
import { characterType } from '../../constances/typesConstances';
import CharacterListItem from './CharacterListItem';
import MonsterListItem from './MonsterListItem';

export type Props = characterType;

export default function EntityListItem(props: Props) {
  console.log(props.salvation);
  return (
    <Fragment>
      {props.salvation && <CharacterListItem {...props} />}
      {!(props.salvation) && <MonsterListItem {...props} />}
    </Fragment>
  )
}
