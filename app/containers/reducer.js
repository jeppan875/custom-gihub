import { combineReducers } from 'redux';

import reposReducer from './Repos/reducer';
import loginReducer from './Login/reducer';

export default combineReducers({
    repos: reposReducer,
    user: loginReducer
});
