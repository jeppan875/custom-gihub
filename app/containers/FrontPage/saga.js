
import { takeLatest } from 'redux-saga/effects';
import { fetchGeneric } from '../GenericFetch/saga';

import { GIT_ISSUES, GIT_ISSUES_NAMESPACE } from './constants';

function* fetchIssues() {
    const gitUrl = 'https://api.github.com/repos/1dv023/jh222nf-examination-3/issues'
    yield fetchGeneric({
        namespace: GIT_ISSUES_NAMESPACE,
        url: gitUrl,
    });
}

export default function* rootSaga() {
    yield takeLatest(GIT_ISSUES, fetchIssues);
}
