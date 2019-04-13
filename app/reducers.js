import { combineReducers } from 'redux';

import genericReducer from './containers/GenericFetch/reducer';
import socketReducer from './websocket/reducer';

export default () => {
    const rootReducer = combineReducers({
        generic: genericReducer,
        updates: socketReducer,
    });

    return rootReducer;
};
