import { applyMiddleware, compose, createStore, Middleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { routerMiddleware } from 'connected-react-router';
import { History } from 'history';

import getRootReducer from './reducer';
import { RootState } from './types';
import rootSaga from './saga';

export default function getStore(
    history: History<{}>,
    preloadedState: Partial<RootState>,
    ...middlewares: Middleware<any, any, any>[]
) {
    const composeEnhancers = (
        process.env.NODE_ENV !== 'production' ?
            ((window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose) :
            compose
    )

    const sagaMiddleware = createSagaMiddleware();

    const store = createStore(
        getRootReducer(history),
        preloadedState,
        composeEnhancers(
            applyMiddleware(
                routerMiddleware(history),
                sagaMiddleware,
                ...middlewares
            )
        )
    );

    sagaMiddleware.run(rootSaga);

    return store;
}