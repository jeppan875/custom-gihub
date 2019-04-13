import { identity } from 'lodash';

import { call, put } from 'redux-saga/effects';
import { request } from 'utils/request';

import { defaultKey } from './selectors';
import {
    fetchGenericFailure,
    fetchGenericStart,
    fetchGenericSuccess,
} from './actions';

export function* fetchGeneric({
    namespace,
    url,
    responseHandler = identity,
    key = defaultKey(),
}) {
    yield put(fetchGenericStart(namespace, key));
    try {
        const response = yield call(request, url);
        yield put(fetchGenericSuccess(namespace, key, responseHandler(response)));
    } catch (error) {
        yield put(fetchGenericFailure(namespace, key, error));
    }
}