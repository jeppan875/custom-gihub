
import { takeLatest } from 'redux-saga/effects';
import { insertReposAction } from './actions';
import { request } from 'utils/request';
import { FETCH_REPOS_SAGA, FETCH_SINGLE_REPO_SAGA } from './constants';
import { call, put } from 'redux-saga/effects';

function* fetchRepos() {
    const url = 'http://localhost:3003/repos'
    const response = yield call(request, url);
    const repos = yield JSON.parse(response.text)
    yield put(insertReposAction({
        key: 'repos',
        data: repos
    }));
}

function* fetchSingleRepo({ name }) {
    console.log(name)
    console.log('SAGA')
}

export default function* rootSaga() {
    yield takeLatest(FETCH_REPOS_SAGA, fetchRepos);
    yield takeLatest(FETCH_SINGLE_REPO_SAGA, fetchSingleRepo);
}
