import update from 'immutability-helper';
import { combineReducers } from 'redux';
import { NAVIGATE_TO, START_GAME } from './actions';
import { screens, STARTING_CHARACTER_STATS } from '../screens/constances';

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

const setupInitialState = { turnOrder: [], characters: [] };

function setupReducer(state = setupInitialState, action) {
  if (action.type === START_GAME) {
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
  }
  return state;
}

export default combineReducers({ navigation: navigatorReducer, setup: setupReducer });
