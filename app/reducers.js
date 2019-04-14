import { combineReducers } from 'redux';

import socketReducer from './websocket/reducer';
import gitReducer from './containers/reducer';

export default () => {
    const rootReducer = combineReducers({
        updates: socketReducer,
        github: gitReducer
    });

    return rootReducer;
};
