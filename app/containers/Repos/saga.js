
import { takeLatest } from 'redux-saga/effects';
import { insertReposAction, insertSingleRepoAction } from './actions';
import { request } from 'utils/request';
import { FETCH_REPOS_SAGA, FETCH_SINGLE_REPO_SAGA, FETCH_REPO_CONTENT_SAGA } from './constants';
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

function* fetchSingleRepo({ name, path }) {
    const url = `http://localhost:3003/repos/content?repo=${name}&path=${path}`
    const response = yield call(request, url);
    const singleRepo = yield JSON.parse(response.text)
    let keys = ['single', name, 'content']
    const slice = path.split('/')
    let pathArr = path === '/' ? keys : ['single', name, ...slice, 'content']
    yield put(insertSingleRepoAction({
        key: pathArr,
        data: singleRepo
    }));
}

function* fetchRepoContent({ name, path }) {
    const url = `http://localhost:3003/repos/content?repo=${name}&path=${path}`
    const response = yield call(request, url);
    const content = yield JSON.parse(response.text)
    content.type === 'file' ?
        console.log(atob(content.content)) :
        yield put(insertSingleRepoAction({
            key: ['single', name],
            data: singleRepo
        }));
}

export default function* rootSaga() {
    yield takeLatest(FETCH_REPOS_SAGA, fetchRepos);
    yield takeLatest(FETCH_SINGLE_REPO_SAGA, fetchSingleRepo);
    yield takeLatest(FETCH_REPO_CONTENT_SAGA, fetchRepoContent);
}
