import Immutable from 'seamless-immutable';
import createReducer from '@ikhsaan/create-reducer';
import { isEqual, uniqWith } from 'lodash';

import {
    INSERT_REPOS_ACTION,
    RESET_REPOS_ACTION,
    INSERT_SINGLE_REPOS_ACTION
} from './constants';

const initialState = Immutable({
    repos: [],
    single: {},
});

export default createReducer(initialState, {
    [INSERT_REPOS_ACTION](state, { key, data }) {
        return state.setIn([key], data)
    },
    [INSERT_SINGLE_REPOS_ACTION](state, { key, data }) {
        return state.setIn(key, data)
    },
    [RESET_REPOS_ACTION]() {
        return initialState
    }
})
