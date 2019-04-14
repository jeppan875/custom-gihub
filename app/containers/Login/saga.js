import { takeLatest } from 'redux-saga/effects';
import {
    gitLogoutAction
} from './actions';
import { gitLoginAction } from './actions';
import { call, put } from 'redux-saga/effects';
import { GIT_LOGIN_SAGA, GIT_LOGOUT_SAGA } from './constants';
import { request } from 'utils/request';
import 'isomorphic-fetch';
function* gitLogin({ user }) {
    yield put(gitLoginAction({
        key: 'user',
        data: user
    }));
}

function* gitLogout() {
    console.log('saga')
    yield fetch(`http://localhost:3003/logout`);
    yield put(gitLogoutAction())
}

export default function* rootSaga() {
    yield takeLatest(GIT_LOGIN_SAGA, gitLogin);
    yield takeLatest(GIT_LOGOUT_SAGA, gitLogout);
}