export type statValueProp = {
  current: number,
  max: number,
};

export type specialStatProp = {
  current: number,
  max: number,
  name: string
};

export type characterType = {
  id: string,
  name: string,
  health: statValueProp,
  salvation: statValueProp,
  strength: statValueProp,
  intelligence: statValueProp,
  agility: statValueProp,
  specialStat?: specialStatProp,
}