/* eslint-disable react/prop-types */
import React, { ReactElement } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { endTurnAction } from '../store/actions';
import { currentCharacterTurnSelector } from '../store/selectors';

export type Props = {
  DisplayComponent: ReactElement,
};

export default function BoardGameController({ DisplayComponent }: Props) {
  const currentCharactersTurn = useSelector(currentCharacterTurnSelector);
  const dispatch = useDispatch();
  const endTypeAction = () => dispatch(endTurnAction())
  return (
    <DisplayComponent currentCharactersTurn={currentCharactersTurn} endTurnAction={endTypeAction} />
  );
}
