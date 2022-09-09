import {call, takeLatest, put} from 'redux-saga/effects';

import {showToast} from '../../components';
import {
  loginStart,
  loginSuccess,
  loginFail,
  signupStart,
  signupSuccess,
  signupFail,
} from './auth.store';
import {loginService, signUpService} from '../../services';
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

function* signupSaga(action: ReturnType<typeof signupStart>) {
  try {
    const response: ILoginRes = yield call(signUpService, action.payload);
    yield put(signupSuccess(response));
    yield showToast('Signup Success!');
  } catch (error: any) {
    showToast(error.message);
    yield put(signupFail(error.message));
  }
}

export function* authSaga() {
  yield takeLatest(loginStart, loginSaga);
  yield takeLatest(signupStart, signupSaga);
}
