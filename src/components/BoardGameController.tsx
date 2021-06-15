/* eslint-disable react/prop-types */
import React, { ReactElement } from 'react';
import { useSelector } from 'react-redux';
import { characterSelector, turnOrderSelector } from '../store/selectors';

export type Props = {
  BoardGameDisplay: ReactElement,
};

export default function BoardGameController({ BoardGameDisplay }: Props) {
  const characters = useSelector(characterSelector);
  const turnOrder = useSelector(turnOrderSelector);
  return (
    <BoardGameDisplay turnOrder={turnOrder} characters={characters} />
  );
}
