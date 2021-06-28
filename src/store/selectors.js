export const screenSelector = (state) => state.navigation.currentPage;

export const characterSelector = (state) => state.gameData.characterMap;

export const currentCharacterTurnSelector = (state) => state.gameData.turnOrder[
  state.gameData.currentTurnIndex
];

export const turnOrderSelector = (state) => state.gameData.turnOrder;

export const activeEntityIndex = (state) => state.gameData.turnOrder[0];
