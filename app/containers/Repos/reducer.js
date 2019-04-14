import Immutable from 'seamless-immutable';
import createReducer from '@ikhsaan/create-reducer';

import {
    INSERT_REPOS_ACTION,
    RESET_REPOS_ACTION
} from './constants';

const initialState = Immutable({
    repos: [],
});

export default createReducer(initialState, {
    [INSERT_REPOS_ACTION](state, { key, data }) {
        return state.setIn([key], data)
    },
    [RESET_REPOS_ACTION]() {
        return initialState
    }
})
