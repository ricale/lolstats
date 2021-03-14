import * as React from 'react';
import { Provider } from 'react-redux';
import { createHashHistory } from 'history';
import { ConnectedRouter } from 'connected-react-router';

import AppRouter from 'router';
import getStore from 'store';
import { ThemeProvider, normalTheme, GlobalStyle } from 'themes';

const history = createHashHistory();
const store = getStore(history, {});

const App = () => {
    return (
        <Provider store={store}>
            <ConnectedRouter history={history}>
                <ThemeProvider theme={normalTheme}>
                    <>
                        <GlobalStyle />
                        <AppRouter />
                    </>
                </ThemeProvider>
            </ConnectedRouter>
        </Provider>
    );
}

export default App;
