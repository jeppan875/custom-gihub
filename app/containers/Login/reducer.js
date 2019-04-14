import Immutable from 'seamless-immutable';
import createReducer from '@ikhsaan/create-reducer';

import {
    GIT_LOGIN_ACTION, GIT_LOGOUT_ACTION
} from './constants';

const initialState = Immutable({
    user: null,
});

export default createReducer(initialState, {
    [GIT_LOGIN_ACTION](state, { key, data }) {
        return state.setIn([key], data)
    },
    [GIT_LOGOUT_ACTION]() {
        return initialState
    }
})
