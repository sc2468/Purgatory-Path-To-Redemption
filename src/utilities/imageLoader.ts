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
export const characterPortraitSelector = (characterId: string) => {
  switch (characterId) {
    case '1':
      return require('../assets/characters/icons/preacher.png');
    case '2':
      return require('../assets/characters/icons/adrenalin-junky.png');
    case '3':
      return require('../assets/characters/icons/scientist.png');
    case '4':
      return require('../assets/characters/icons/angry-ceo.jpg');
    default:
      return require('../assets/demon-cutout.png');
  }
};

export const characterColorSelector = (characterId: string) => {
  switch (characterId) {
    case '1':
      return 'orange';
    case '2':
      return 'green';
    case '3':
      return 'lightblue';
    case '4':
      return 'red';
    default:
      return 'orange';
  }
};

export const statIconSelector = (statName: string) => {
  switch (statName) {
    case 'health':
      return 'heart';
    case 'salvation':
      return 'book-cross';
    case 'strength':
      return 'dumbbell';
    case 'intelligence':
      return 'brain';
    case 'agility':
      return 'run-fast';
    case 'rage':
      return 'nuke';
    case 'adrenaline':
      return 'heart-pulse';
    case 'drone':
      return 'quadcopter';
    case 'carryCapacity':
      return 'sack';
    case 'cardLimit':
      return 'cards';
    case 'movement':
      return 'shoe-print';
    default:
      return 'book-cross';
  }
};

export const monsterImageSelector = (monsterId: number) => monsterId;
