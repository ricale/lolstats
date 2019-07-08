import {createStore, applyMiddleware, compose} from 'redux';

export default function getState (reducer, preloadedState, ...middlewares) {
  const composeEnhancers = (
    process.env.NODE_ENV !== 'production' ?
      (window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose) :
      compose
  );

  return createStore(
    reducer,
    preloadedState,
    composeEnhancers(
      applyMiddleware(
        ...middlewares
      )
    )
  );
}
