
import { takeLatest } from 'redux-saga/effects';
import { fetchGeneric } from '../GenericFetch/saga';

import { FETCH_REPOS, GIT_NAMESPACE } from './constants';

const responseHandler = async (response) => {
    const data = await JSON.parse(response.text)
    console.log(data, 'lkfmvrj')
    return data
}

function* fetchIssues () {
    const gitUrl = 'http://localhost:3003/repos'
    yield fetchGeneric({
        namespace: GIT_NAMESPACE,
        url: gitUrl,
        key: 'repos',
        responseHandler
    });
}

export default function* rootSaga() {
    yield takeLatest(FETCH_REPOS, fetchIssues);
}
