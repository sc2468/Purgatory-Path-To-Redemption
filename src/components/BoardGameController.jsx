/* eslint-disable react/prop-types */
import React from 'react';
import { useSelector } from 'react-redux';
import { characterSelector, turnOrderSelector } from '../store/selectors';

export default function BoardGameController({ BoardGameDisplay }) {
  const characters = useSelector(characterSelector);
  const turnOrder = useSelector(turnOrderSelector);
  return (
    <BoardGameDisplay turnOrder={turnOrder} characters={characters} />
  );
}
