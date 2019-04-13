
import { takeLatest } from 'redux-saga/effects';
import { fetchGenericSuccess } from '../GenericFetch/actions';
import { request } from 'utils/request';
import { FETCH_REPOS, GIT_NAMESPACE } from './constants';
import { call, put } from 'redux-saga/effects';

function* fetchRepos() {
    const url = 'http://localhost:3003/repos'
    const response = yield call(request, url);
    const repos = yield JSON.parse(response.text)
    console.log(repos)
    yield put(fetchGenericSuccess(
        GIT_NAMESPACE,
        'repos',
        repos
    ));
}

export default function* rootSaga() {
    yield takeLatest(FETCH_REPOS, fetchRepos);
}
