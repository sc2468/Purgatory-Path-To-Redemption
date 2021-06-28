export type statValueProp = {
  current: number,
  max: number,
};

export type specialStatProp = {
  current: number,
  max: number,
  name: string
};

export const entityTypes = { CHARACTER: 'CHARACTER', MONSTER: 'MONSTER' }

export type characterType = {
  id: string,
  name: string,
  type: typeof entityTypes.CHARACTER | typeof entityTypes.MONSTER,
  health: statValueProp,
  salvation?: statValueProp,
  strength?: statValueProp,
  intelligence?: statValueProp,
  agility?: statValueProp,
  specialStat?: specialStatProp,
}

export type monsterType = {
  id: string,
  name: string,
  health: statValueProp,
}