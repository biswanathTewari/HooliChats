import {createSlice, PayloadAction} from '@reduxjs/toolkit';

interface UserState {
  loading: boolean;
  firstTime: boolean;
}

const initialState: UserState = {
  loading: false,
  firstTime: true,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setLoading(state, action: PayloadAction<boolean>) {
      state.loading = action.payload;
    },
    setFirstTime(state, action: PayloadAction<boolean>) {
      state.firstTime = action.payload;
    },
  },
});

export const {setLoading, setFirstTime} = userSlice.actions;
export default userSlice.reducer;
