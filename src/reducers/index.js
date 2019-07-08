import {combineReducers} from 'redux';
import {connectRouter} from 'connected-react-router';

import summoners from './summoners';

export default history => combineReducers({
  summoners,
  router: connectRouter(history),
});
