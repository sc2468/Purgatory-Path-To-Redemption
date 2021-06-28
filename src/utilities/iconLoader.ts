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
    case 'anger':
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
    case 'rage':
      return 'emoticon-angry-outline';
    case 'heads':
      return 'account-group';
    default:
      return 'book-cross';
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
    case 'Minotaur':
      return 'grey'
    case 'Hydra':
      return 'grey'
    case 'Eye':
      return 'grey'
    default:
      return 'orange';
  }
};