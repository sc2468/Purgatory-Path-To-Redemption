export type statValueProp = {
  current: number,
  max: number,
};

export type characterType = {
  id: string,
  name: string,
  health: statValueProp,
  salvation: statValueProp,
  strength: statValueProp,
  intelligence: statValueProp,
  agility: statValueProp,
}