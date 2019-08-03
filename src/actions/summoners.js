import {createActions} from 'redux-actions';

const actions = createActions({
  SUMMONERS: {
    FETCH_ONE: (username) => ({username}),
    FETCH_ENTRY: (userId) => ({userId}),
    FETCH_MATCHES: (accountId, queue) => ({accountId, queue}),
    FETCH_STATISTICS: (accountId, queue) => ({accountId, queue}),
  },
});

export default {...actions.summoners};
