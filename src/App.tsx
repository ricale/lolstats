import * as React from 'react';
import { Provider } from 'react-redux';
import { createHashHistory } from 'history';
import { ConnectedRouter } from 'connected-react-router';
// import {
//   createGlobalStyle,
// } from 'styled-components';

import getStore from 'store';

// import Router from './views/router';

const history = createHashHistory();
const store = getStore(history, {});

// const GlobalStyle = createGlobalStyle`
//   html, body, #root {
//     padding: 0px;
//     margin: 0px;
//     height: 100%;
//   }
//   body {
//     background-color: #EFEFEF;
//   }
//   * {
//     box-sizing: border-box;
//   }
// `;

const App = () => {
  return (
    <Provider store={store}>
      <ConnectedRouter history={history}>
        {/* <>
          <GlobalStyle />
          <Router />
        </> */}
      </ConnectedRouter>
    </Provider>
  );
}

export default App;
