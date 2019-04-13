import frontpageSaga from './containers/Frontpage/saga';
import loginSaga from './containers/Login/saga';
import { all, fork } from 'redux-saga/effects';

function* rootSaga() {
    try {
        yield all([
            fork(frontpageSaga),
            fork(loginSaga)
        ]);
    } catch (err) {
        console.error(err);
    }
}

export default rootSaga;
