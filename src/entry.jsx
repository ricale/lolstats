import "regenerator-runtime/runtime";

import React from 'react';
import {Provider} from 'react-redux';
import {ConnectedRouter} from 'connected-react-router';
import {createHashHistory} from 'history';
import {routerMiddleware} from 'connected-react-router';
import createSagaMiddleware from 'redux-saga';
import {
  createGlobalStyle,
} from 'styled-components';

import reducers from 'reducers';
import {getStore} from 'lib';

import saga from './sagas';
import Router from './views/router';

const history = createHashHistory();
const sagaMiddleware = createSagaMiddleware();
const store = getStore(
  reducers(history),
  {},
  routerMiddleware(history),
  sagaMiddleware
);

sagaMiddleware.run(saga);

const GlobalStyle = createGlobalStyle`
  html, body, #root {
    padding: 0px;
    margin: 0px;
    height: 100%;
  }
  body {
    background-color: #EFEFEF;
  }
  * {
    box-sizing: border-box;
  }
`;

const Entry = () => (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <>
        <GlobalStyle />
        <Router />
      </>
    </ConnectedRouter>
  </Provider>
);

export default Entry;
