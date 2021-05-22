export const NAVIGATE_TO = 'NAVIGATE_TO';
export const navigateToAction = (page) => ({ type: NAVIGATE_TO, page });

export const START_GAME = 'START_GAME';
export const startGameAction = (selectedCharacter) => ({ type: START_GAME, selectedCharacter });
