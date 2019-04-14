import { takeLatest } from 'redux-saga/effects';
import {
    gitLogoutAction
} from './actions';
import { gitLoginAction } from './actions';
import { put } from 'redux-saga/effects';
import { GIT_LOGIN_SAGA, GIT_LOGOUT_SAGA } from './constants';
import { resetReposAction } from 'containers/Repos/actions'
import 'isomorphic-fetch';

function* gitLogin({ user }) {
    yield put(gitLoginAction({
        key: 'user',
        data: user
    }));
}

function* gitLogout() {
    yield fetch(`http://localhost:3003/logout`);
    yield put(gitLogoutAction())
    yield put(resetReposAction())
}

export default function* rootSaga() {
    yield takeLatest(GIT_LOGIN_SAGA, gitLogin);
    yield takeLatest(GIT_LOGOUT_SAGA, gitLogout);
}