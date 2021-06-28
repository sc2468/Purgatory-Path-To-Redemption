/* eslint-disable global-require */
export const characterImageSelector = (characterId: string) => {
  switch (characterId) {
    //
    case '1':
      return require('../assets/characters/full-image/preacher.png');
    case '2':
      return require('../assets/characters/full-image/adrenalin-junky.png');
    case '3':
      return require('../assets/characters/full-image/scientist.png');
    case '4':
      return require('../assets/characters/full-image/angry-ceo.jpg');
    default:
      return require('../assets/demon-cutout.png');
  }
};

/* eslint-disable global-require */
export const characterPortraitSelector = (entityId: string) => {
  switch (entityId) {
    case '1':
      return require('../assets/characters/icons/preacher.png');
    case '2':
      return require('../assets/characters/icons/adrenalin-junky.png');
    case '3':
      return require('../assets/characters/icons/scientist.png');
    case '4':
      return require('../assets/characters/icons/angry-ceo.jpg');
    case 'Minotaur':
      return require('../assets/monsters/minotaur.png');
    case 'Hydra':
      return require('../assets/monsters/hydra.png');
    case 'Eye':
      return require('../assets/monsters/eye.png');
    default:
      return require('../assets/demon-cutout.png');
  }
};


