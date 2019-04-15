import Immutable from 'seamless-immutable';
import createReducer from '@ikhsaan/create-reducer';

import {
    INSERT_REPOS_ACTION,
    RESET_REPOS_ACTION,
    INSERT_SINGLE_REPOS_ACTION
} from './constants';

const initialState = Immutable({
    repos: [],
    single: []
});

export default createReducer(initialState, {
    [INSERT_REPOS_ACTION](state, { key, data }) {
        return state.setIn([key], data)
    },
    [INSERT_SINGLE_REPOS_ACTION](state, { keys, data }) {
        console.log(keys)
        console.log(data)
        return state.setIn([keys[0], keys[1]], data)
    },
    [RESET_REPOS_ACTION]() {
        return initialState
    }
})
