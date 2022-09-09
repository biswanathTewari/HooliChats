import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {ILoginParam, IAuth, ILoginRes} from '../../types';

const initialState: IAuth = {
  token: null,
  loading: false,
  error: null,
  user: null,
  firstTime: false,
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
    },
    loginFail(state, action: PayloadAction<any>) {
      state.error = action.payload;
      state.loading = false;
    },
    setFirstTime(state, action: PayloadAction<boolean>) {
      state.firstTime = action.payload;
    },
  },
});

export const {loginStart, loginSuccess, loginFail, setFirstTime} =
  authSlice.actions;
export default authSlice.reducer;
