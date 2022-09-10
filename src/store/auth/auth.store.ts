import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {ILoginParam, IAuth, ILoginRes, ISignupParam} from '../../types';

const initialState: IAuth = {
  token: null,
  loading: false,
  error: null,
  user: null,
  firstTime: false,
  loggedIn: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loginStart(state, _action: PayloadAction<ILoginParam>) {
      state.loading = true;
    },
    loginSuccess(state, action: PayloadAction<ILoginRes>) {
      state.token = action.payload.token;
      state.user = action.payload.user;
      state.loading = false;
      state.loggedIn = true;
    },
    loginFail(state, action: PayloadAction<any>) {
      state.error = action.payload;
      state.loading = false;
    },
    setFirstTime(state, action: PayloadAction<boolean>) {
      state.firstTime = action.payload;
    },
    signupStart(state, _action: PayloadAction<ISignupParam>) {
      state.loading = true;
    },
    signupSuccess(state, action: PayloadAction<ILoginRes>) {
      state.token = action.payload.token;
      state.user = action.payload.user;
      state.loading = false;
      state.loggedIn = true;
    },
    signupFail(state, action: PayloadAction<any>) {
      state.error = action.payload;
      state.loading = false;
    },
  },
});

export const {
  loginStart,
  loginSuccess,
  loginFail,
  setFirstTime,
  signupStart,
  signupSuccess,
  signupFail,
} = authSlice.actions;
export default authSlice.reducer;
