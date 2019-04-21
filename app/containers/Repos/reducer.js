import Immutable from 'seamless-immutable';
import createReducer from '@ikhsaan/create-reducer';

import {
    INSERT_REPOS_ACTION,
    RESET_REPOS_ACTION,
    INSERT_REPO_CONTENT_ACTION
} from './constants';

// remember, that the methods get attached at state.github.repos
// for getIn, setIn , merge etc
const initialState = Immutable({
    repos: [],
    single: {},
});

export default createReducer(initialState, {
    [INSERT_REPOS_ACTION](state, { key, data }) {
        return state.setIn([key], data)
    },
    [INSERT_REPO_CONTENT_ACTION](state, { key, data }) {
        return state.setIn(key, data)
    },
    [RESET_REPOS_ACTION]() {
        return initialState
    }
})
