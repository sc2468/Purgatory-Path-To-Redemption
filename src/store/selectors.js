export const screenSelector = (state) => state.navigation.currentPage;

export const characterSelector = (state) => state.setup.characterMap;

export const monsterSelector = (state) => state.setup.monsterMonster;

export const currentTurnSelector = (state) => state.setup.currentTurnNumber;

export const turnOrderSelector = (state) => state.setup.turnOrder;

export const activeEntityIndex = (state) => state.setup.turnOrder[0];
