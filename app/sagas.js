import repoSagas from './containers/Repos/saga';
import loginSaga from './containers/Login/saga';
import { all, fork } from 'redux-saga/effects';

function* rootSaga() {
    try {
        yield all([
            fork(repoSagas),
            fork(loginSaga)
        ]);
    } catch (err) {
        console.error(err);
    }
}

export default rootSaga;
