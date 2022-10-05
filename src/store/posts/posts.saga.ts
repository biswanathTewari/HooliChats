import {call, takeLatest, put} from 'redux-saga/effects';

import {showToast} from '../../components';
import {addPost, addPostSuccess, addPostFail} from './posts.store';
import {addPostService} from '../../services';

function* addPostSaga(action: ReturnType<typeof addPost>): Generator {
  try {
    const response: any = yield call(addPostService, action.payload);
    yield put(addPostSuccess(response));
    yield showToast('Uploaded Successfully!');
  } catch (error: any) {
    showToast(error.message);
    yield put(addPostFail({}));
  }
}

export function* postsSaga() {
  yield takeLatest(addPost, addPostSaga);
}
