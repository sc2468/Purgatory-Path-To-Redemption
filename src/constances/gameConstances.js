export const AVAILABLE_CHARACTERS = [
  {
    id: 1, name: 'Prisoner Turned Preacher', description: 'The preachers tries to follow his new path of righteousness, by riding all the demonic influences he can when ever he finds them, but he can fall back to his old life when confronted with his old vices.',
  },
  {
    id: 2, name: 'Adrenalin Junkey', description: 'The Adrenalin Junky still searching for her next adrenaline hit to keep her depression at bay. You gain benefits if your adrenaline is high and consequences if it\'s low. You are constantly on the move which can result in you getting yourself in and out of trouble.',
  },
  {
    id: 3, name: 'The Scientist', description: 'Being a devoted atheist the scientist is having a hard time processing the supernatural surroundings he finds himself in. In order to understand the supernatural he must collect data on it. As such the scientist will search the area with the help of this drone for key supernatural locations in order to carry out experiments on them.',
  },
  {
    id: 4, name: 'The Angry CEO', description: 'To find this salvation the CEO must learn to clam his anger, the only problem being that just about everything pisses him off.',
  },
];

export const STARTING_CHARACTER_STATS = {
  1: {
    name: 'Prisoner Turned Preacher', health: { current: 15, max: 15 }, salvation: { current: 30, max: 100 }, strength: { current: 4, max: 5 }, intelligence: { current: 2, max: 5 }, agility: { current: 3, max: 5 },
  },
  2: {
    name: 'Adrenalin Junky', health: { current: 15, max: 15 }, salvation: { current: 30, max: 100 }, strength: { current: 4, max: 5 }, intelligence: { current: 2, max: 5 }, agility: { current: 3, max: 5 },
  },
  3: {
    name: 'The Scientist', health: { current: 15, max: 15 }, salvation: { current: 30, max: 100 }, strength: { current: 4, max: 5 }, intelligence: { current: 2, max: 5 }, agility: { current: 3, max: 5 },
  },
  4: {
    name: 'The Angry CEO', health: { current: 15, max: 15 }, salvation: { current: 30, max: 100 }, strength: { current: 4, max: 5 }, intelligence: { current: 2, max: 5 }, agility: { current: 3, max: 5 },
  },
};

export const statNames = ['health', 'salvation', 'strength', 'intelligence', 'agility'];
