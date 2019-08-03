import championJson from 'constants/championByKey.json';

const BASE = 'public/images'

export const getImagePath = (category, id) => {
  switch(category) {
    case 'profileicon':
      return `${BASE}/${category}/${id}.png`;
    case 'emblem':
      return `${BASE}/emblems/Emblem_${id.replace(/$[a-z]/, (match) => p1.toUpperCase())}.png`;
    case 'champion':
      return `${BASE}/${category}/${championJson.data[id].id}.png`;
    default:
      return `${BASE}/${category}/${id}.png`;
  }
  return ''
};
