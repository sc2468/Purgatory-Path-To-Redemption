import update from 'immutability-helper';
import { combineReducers } from 'redux';
import { CHANGE_CHARACTER_STAT, NAVIGATE_TO, START_GAME } from './actions';
import { screens } from '../constances/displayConstances';
import { STARTING_CHARACTER_STATS } from '../constances/gameConstances';

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

const gameInitialState = { turnOrder: [], characters: [] };

const changeStat = (state, action) => {
  const stat = action.change.stat;
  const character = { ...state.characterMap[action.change.characterId] };
  const newValue = Math.min(action.change.newValue, character[stat].max);
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
      characterMap,
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
  return state;
}

export default combineReducers({ navigation: navigatorReducer, gameDate: gameReducer });
