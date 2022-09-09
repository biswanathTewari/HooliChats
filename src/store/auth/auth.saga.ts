import {call, takeLatest, put} from 'redux-saga/effects';

import {showToast} from '../../components';
import {loginStart, loginSuccess, loginFail} from './auth.store';
import {loginService} from '../../services';
import {ILoginRes} from '../../types';

function* loginSaga(action: ReturnType<typeof loginStart>) {
  try {
    const response: ILoginRes = yield call(loginService, action.payload);
    yield put(loginSuccess(response));
    yield showToast('Login Success!');
  } catch (error: any) {
    showToast(error.message);
    yield put(loginFail(error.message));
  }
}

export function* authSaga() {
  yield takeLatest(loginStart, loginSaga);
}
