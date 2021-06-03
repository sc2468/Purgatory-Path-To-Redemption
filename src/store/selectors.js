export const screenSelector = (state) => state.navigation.currentPage;

export const characterSelector = (state) => state.gameDate.characterMap;

export const monsterSelector = (state) => state.gameDate.monsterMonster;

export const currentTurnSelector = (state) => state.gameData.currentTurnNumber;

export const turnOrderSelector = (state) => state.gameDate.turnOrder;

export const activeEntityIndex = (state) => state.gameDate.turnOrder[0];
