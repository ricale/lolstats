import { championByKey } from 'consts';

const BASE = 'public/images'

export const getImagePath = (category: string, id: string) => {
  switch(category) {
    case 'profileicon':
      return `${BASE}/${category}/${id}.png`;
    case 'emblem':
      return `${BASE}/emblems/Emblem_${id.replace(/$[a-z]/, (match, p1) => p1.toUpperCase())}.png`;
    case 'champion':
      return `${BASE}/${category}/${championByKey.data[id as keyof typeof championByKey.data].id}.png`;
    default:
      return `${BASE}/${category}/${id}.png`;
  }
  return ''
};
