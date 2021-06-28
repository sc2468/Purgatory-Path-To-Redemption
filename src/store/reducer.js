import update from 'immutability-helper';
import { combineReducers } from 'redux';
import {
  CHANGE_CHARACTER_STAT, END_TURN, NAVIGATE_TO, START_GAME,
} from './actions';
import { screens } from '../constances/displayConstances';
import {
  STARTING_CHARACTER_STATS, Minotaur, Hydra, Eye,
} from '../constances/gameConstances';

const NAVIGATION_INITIAL_STATE = { currentPage: screens.LANDING };

function navigatorReducer(state = NAVIGATION_INITIAL_STATE, action) {
  if (action.type === NAVIGATE_TO) {
    return update(state, {
      $merge: {
        currentPage: action.page,
      },
    });
  }
  return state;
}

const gameInitialState = { turnOrder: [], roundNumber: 0 };

const changeStat = (state, action) => {
  const stat = action.change.stat;
  const character = { ...state.characterMap[action.change.characterId] };
  const newValue = Math.max(0, Math.min(action.change.newValue, character[stat].max));

  character[stat].current = newValue;

  return update(state, {
    $merge: {
      characterMap: { ...state.characterMap, [action.change.characterId]: character },
    },
  });
};

const startGame = (state, action) => {
  const characterMap = {};
  action.selectedCharacter.forEach((characterId) => {
    characterMap[characterId] = STARTING_CHARACTER_STATS[characterId];
  });

  return update(state, {
    $merge: {
      turnOrder: action.selectedCharacter,
      currentTurnIndex: 0,
      characterMap,
    },
  });
};

const endRound = (state, roundNumber) => {
  const characters = { ...state.characterMap };
  switch (roundNumber) {
    case 2:
      return { roundNumber, characterMap: { ...characters, Minotaur } };
    case 4:
      return { roundNumber, characterMap: { ...characters, Hydra } };
    case 6:
      return { roundNumber, characterMap: { ...characters, Eye } };
    default:
      return { roundNumber };
  }
};

const endTurn = (state) => {
  const { currentTurnIndex, roundNumber } = state;
  let nextIndex = currentTurnIndex + 1;
  let endOfRoundChanges = {};
  if (nextIndex >= state.turnOrder.length) {
    nextIndex = 0;
    endOfRoundChanges = endRound(state, roundNumber + 1);
  }
  return update(state, {
    $merge: {
      currentTurnIndex: nextIndex,
      ...endOfRoundChanges,
    },
  });
};

function gameReducer(state = gameInitialState, action) {
  if (action.type === START_GAME) {
    return startGame(state, action);
  }
  if (action.type === CHANGE_CHARACTER_STAT) {
    return changeStat(state, action);
  }
  if (action.type === END_TURN) {
    return endTurn(state);
  }
  return state;
}

export default combineReducers({ navigation: navigatorReducer, gameData: gameReducer });
