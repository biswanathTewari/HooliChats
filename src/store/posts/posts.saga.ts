import {call, takeLatest, put} from 'redux-saga/effects';

import {showToast} from '../../components';
import {
  addPost,
  addPostSuccess,
  addPostFail,
  getAllPosts,
  getAllPostsSuccess,
  getAllPostsFail,
} from './posts.store';
import {addPostService, getAllPostsService} from '../../services';
import {navigate} from '../../utils';

function* addPostSaga(action: ReturnType<typeof addPost>): Generator {
  try {
    const response: any = yield call(addPostService, action.payload);
    yield put(addPostSuccess(response));
    navigate('Home');
    yield showToast('Uploaded Successfully!');
  } catch (error: any) {
    showToast(error.message);
    yield put(addPostFail({}));
  }
}

function* getAllPostsSaga(): Generator {
  try {
    const response: any = yield call(getAllPostsService);
    yield put(getAllPostsSuccess(response));
  } catch (error: any) {
    console.log('get all posts error', error);
    showToast(error.message);
    yield put(getAllPostsFail({}));
  }
}

export function* postsSaga() {
  yield takeLatest(addPost, addPostSaga);
  yield takeLatest(getAllPosts, getAllPostsSaga);
}
