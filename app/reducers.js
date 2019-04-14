import { combineReducers } from 'redux';

import genericReducer from './containers/GenericFetch/reducer';
import socketReducer from './websocket/reducer';
import reposReducer from './containers/Repos/reducer';

export default () => {
    const rootReducer = combineReducers({
        generic: genericReducer,
        updates: socketReducer,
        github: reposReducer
    });

    return rootReducer;
};
