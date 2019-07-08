const BASE = 'public/images'

export const getImagePath = (category, name) => {
  switch(category) {
    case 'profileicon':
      return `${BASE}/${category}/${name}.png`;
    case 'emblem':
      return `${BASE}/emblems/Emblem_${name.replace(/$[a-z]/, (match) => p1.toUpperCase())}.png`;
    default:
      return `${BASE}/${category}/${name}.png`;
  }
  return ''
};
