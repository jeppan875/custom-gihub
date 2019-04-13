import Immutable from 'seamless-immutable';
import createSagaMiddleware from 'redux-saga';
import { applyMiddleware, compose, createStore } from 'redux';

import rootReducer from './reducers';
import rootSaga from './sagas';

const sagaMiddleware = createSagaMiddleware();
const dev = process.env.NODE_ENV !== 'production';
const isClient = typeof window !== 'undefined';

const composeEnhancers =
    dev && isClient && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
        ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
        : compose;

const middleware = [sagaMiddleware];

if (dev && isClient) {
    const { createLogger } = require('redux-logger');
    const logger = createLogger({
        collapsed: true,
    });
    middleware.push(logger);
}

export function configureStore(initialState = {}) {
    const store = createStore(
        rootReducer(),
        Immutable.isImmutable(initialState)
            ? initialState
            : Immutable(initialState),
        composeEnhancers(applyMiddleware(...middleware)),
    );

    store.runSagaTask = () => {
        store.sagaTask = sagaMiddleware.run(rootSaga);
    };

    // run the rootSaga initially
    store.runSagaTask();
    return store;
}

export default configureStore;
