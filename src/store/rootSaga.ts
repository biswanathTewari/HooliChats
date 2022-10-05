import {all} from 'redux-saga/effects';

import {authSaga} from './auth/auth.saga';
import {postsSaga} from './posts/posts.saga';

export function* rootSaga() {
  yield all([authSaga(), postsSaga()]);
}
