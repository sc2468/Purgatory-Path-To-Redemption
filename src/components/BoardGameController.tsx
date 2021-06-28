/* eslint-disable react/prop-types */
import React, { ReactElement } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { endTurnAction } from '../store/actions';
import { characterSelector, currentCharacterTurnSelector, turnOrderSelector } from '../store/selectors';

export type Props = {
  BoardGameDisplay: ReactElement,
};

export default function BoardGameController({ BoardGameDisplay }: Props) {
  const characters = useSelector(characterSelector);
  const turnOrder = useSelector(turnOrderSelector);
  const currentTurn = useSelector(currentCharacterTurnSelector);
  return (
    <BoardGameDisplay
      turnOrder={turnOrder}
      characters={characters}
      currentTurn={currentTurn}
    />
  );
}
