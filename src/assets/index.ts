import { championByKey } from 'consts';

const BASE = 'public'

export const getImagePath = (category: string, id: string) => {
  switch(category) {
    case 'profileicon':
      return `${BASE}/dragontail/latest/img/profileicon/${id}.png`;
    case 'emblem':
      return `${BASE}/images/emblems/Emblem_${id.replace(/$[a-z]/, (match, p1) => p1.toUpperCase())}.png`;
    case 'champion':
      // return `${BASE}/images/${category}/${championByKey[id as keyof typeof championByKey].id}.png`;
      return `${BASE}/dragontail/latest/img/champion/${championByKey[id as keyof typeof championByKey].id}.png`;
    default:
      return `${BASE}/images/${category}/${id}.png`;
  }
};
