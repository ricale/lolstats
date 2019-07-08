import React from 'react';
import {
  HashRouter as Router,
  Route,
} from 'react-router-dom';

import SummonerDetail from './summoners/detail';

const RouterContainer = () => (
  <Router>
    <Route
        path='/summoners/:username'
        component={SummonerDetail}
        />
  </Router>
);

export default RouterContainer;
