import Immutable from 'seamless-immutable';
import createReducer from '@ikhsaan/create-reducer';
import { isEqual, uniqWith } from 'lodash';

import {
    FETCH_GENERIC_FAILURE,
    FETCH_GENERIC_START,
    FETCH_GENERIC_SUCCESS,
    RESET_GENERIC
} from './actions';

const initialState = Immutable({
    __cache__: {},
});

function mergeState(state, model, key, obj) {
    if (!state) {
        return initialState
    }
    const current = state.getIn([model, key]);
    return state.setIn([model, key], current != null ? current.merge(obj) : obj);
}

export default createReducer(initialState, {
    [FETCH_GENERIC_START](state, { model, key }) {
        return mergeState(state, model, key, {
            error: undefined,
            fetching: true,
        });
    },

    [FETCH_GENERIC_SUCCESS](state, { model, key, data }) {
        let currentData = state.getIn([model, key], {});
        let nextData = data;

        // Merge current and next results arrays
        console.log('redddduccccerrrr')
        console.log(nextData)
        if (
            nextData != null &&
            Array.isArray(nextData.results) &&
            Array.isArray(currentData.results)
        ) {
            currentData = Immutable.asMutable(currentData, { deep: true });

            nextData = {
                ...currentData,
                ...nextData,
                results: uniqWith(
                    [...nextData.results, ...currentData.results],
                    (a, b) => a.id === b.id || isEqual(a, b),
                ),
            };
        }

        return mergeState(state, model, key, {
            fetching: false,
            ...nextData,
        });
    },

    [FETCH_GENERIC_FAILURE](state, { model, key, error }) {
        return mergeState(state, model, key, {
            fetching: false,
            error,
        });
    },
    [RESET_GENERIC]() {
        return mergeState(undefined);
    },
});
