/* eslint-disable global-require */
export const characterImageSelector = (characterId) => {
  console.log(characterId);
  switch (characterId) {
    //
    case 1:
      return require('../assets/characters/full-image/preacher.png');
    case 2:
      return require('../assets/characters/full-image/adrenalin-junky.png');
    case 3:
      return require('../assets/characters/full-image/scientist.png');
    case 4:
      return require('../assets/characters/full-image/angry-ceo.jpg');
    default:
      return require('../assets/demon-cutout.png');
  }
};

/* eslint-disable global-require */
export const characterIconSelector = (characterId) => {
  switch (characterId) {
    //
    case 1:
      return require('../assets/characters/icons/preacher.png');
    case 2:
      return require('../assets/characters/icons/adrenalin-junky.png');
    case 3:
      return require('../assets/characters/icons/scientist.png');
    case 4:
      return require('../assets/characters/icons/angry-ceo.jpg');
    default:
      return require('../assets/demon-cutout.png');
  }
};

export const monsterImageSelector = (monsterId) => monsterId;
