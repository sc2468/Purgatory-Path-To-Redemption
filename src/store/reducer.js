import update from 'immutability-helper';
import { combineReducers } from 'redux';
import { CHANGE_CHARACTER_STAT, NAVIGATE_TO, START_GAME } from './actions';
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

const gameInitialState = { turnOrder: [], characters: [] };

// TODO separate these into functions
function gameReducer(state = gameInitialState, action) {
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
  if (action.type === CHANGE_CHARACTER_STAT) {
    const character = { ...state.characterMap[action.change.characterId] };
    character[action.change.stat] = action.change.newValue;

    return update(state, {
      $merge: {
        characterMap: { ...state.characterMap, [action.change.characterId]: character },
      },
    });
  }
  return state;
}

export default combineReducers({ navigation: navigatorReducer, gameDate: gameReducer });
