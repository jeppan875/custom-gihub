import { combineReducers } from 'redux';

import genericReducer from './containers/GenericFetch/reducer';
import socketReducer from './websocket/reducer';
import gitReducer from './containers/reducer';
import loginReducer from './containers/Login/reducer';

export default () => {
    const rootReducer = combineReducers({
        generic: genericReducer,
        updates: socketReducer,
        github: gitReducer
    });

    return rootReducer;
};
