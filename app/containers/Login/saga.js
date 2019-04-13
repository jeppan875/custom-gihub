import { takeLatest } from 'redux-saga/effects';
import { fetchGeneric } from '../GenericFetch/saga';
import {
    fetchGenericSuccess,
    resetGeneric
} from '../GenericFetch/actions';
import { call, put } from 'redux-saga/effects';

import { GIT_LOGIN, GIT_NAMESPACE, GIT_LOGOUT } from './constants';

function* gitLogin({ user }) {
    yield put(fetchGenericSuccess(
        GIT_NAMESPACE,
        'user',
        user,
    ));
}

function* gitLogout() {
    yield fetchGeneric({
        namespace: GIT_NAMESPACE,
        url: `http://localhost:3003/logout`,
    });
    yield put(resetGeneric())
}

export default function* rootSaga() {
    yield takeLatest(GIT_LOGIN, gitLogin);
    yield takeLatest(GIT_LOGOUT, gitLogout);
}