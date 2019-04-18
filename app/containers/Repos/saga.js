
import { takeLatest } from 'redux-saga/effects';
import { insertReposAction, insertSingleRepoAction } from './actions';
import { request } from 'utils/request';
import { FETCH_REPOS_SAGA, FETCH_REPO_CONTENT_SAGA } from './constants';
import { call, put } from 'redux-saga/effects';

function* fetchRepos() {
    const url = 'http://localhost:3003/repos/repos'
    const response = yield call(request, url);
    const repos = yield JSON.parse(response.text)
    yield put(insertReposAction({
        key: 'repos',
        data: repos
    }));
}

function* fetchRepoContent({ name, path }) {
    const url = `http://localhost:3003/repos/content?repo=${name}&path=${path}`
    const response = yield call(request, url);
    const singleRepo = yield JSON.parse(response.text)
    let defaultKey = ['single', name, 'content']
    let key = path === '/' ? defaultKey : ['single', name, ...path.split('/'), 'content']
    yield put(insertSingleRepoAction({
        key,
        data: singleRepo
    }));
}

export default function* rootSaga() {
    yield takeLatest(FETCH_REPOS_SAGA, fetchRepos);
    yield takeLatest(FETCH_REPO_CONTENT_SAGA, fetchRepoContent);
}
