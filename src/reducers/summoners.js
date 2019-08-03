const initialState = {
  current: {},
  entry: [],
  matches: [],
  statistics: [],
};

export default function summoners (state = initialState, action) {
  switch(action.type) {
    case 'SUMMONERS/FETCH_ONE':
      return {...state, loading: true};
    case 'SUMMONERS/FETCH_ONE/SUCCESS':
      return {...state, current: action.payload, loading: false};

    case 'SUMMONERS/FETCH_ENTRY':
      return {...state, loading: true};
    case 'SUMMONERS/FETCH_ENTRY/SUCCESS':
      return {...state, entry: action.payload, loading: false};

    case 'SUMMONERS/FETCH_MATCHES':
      return {...state, loading: true};
    case 'SUMMONERS/FETCH_MATCHES/SUCCESS':
      return {...state, matches: action.payload, loading: false};

    case 'SUMMONERS/FETCH_STATISTICS':
      return {...state, loading: true};
    case 'SUMMONERS/FETCH_STATISTICS/SUCCESS':
      return {...state, statistics: action.payload, loading: false};
  }
  return state;
}
