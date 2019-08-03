import numeral from 'numeral';

function numberWithFormat (n, o = {}) {
  const delimiter = o.delimiter !== undefined ? o.delimiter : true;
  const precision = o.precision !== undefined ? o.precision : 0;

  let format = '0';
  if(o.delimiter) {
    format = `0,${format}`
  }
  if(o.precision) {
    foramt = `${format}.${[...new Array(precision)].reduce((r,_) => `${r}0`, '')}`
  }

  return numeral(n).format(format);
}

export default function formatted (value, options = {}) {
  if(typeof (+value) === 'number') {
    return numberWithFormat(+value, options);
  }

  return value;
}
