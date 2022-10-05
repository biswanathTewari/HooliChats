import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {IPost, IPostReq} from '../../types';

interface IPostsState {
  posts: IPost[];
  loading: boolean;
  uploading: boolean;
}

const initialState: IPostsState = {
  posts: [],
  loading: false,
  uploading: false,
};

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    addPost(state, _action: PayloadAction<IPostReq>) {
      state.uploading = true;
    },
    addPostSuccess(state, action: PayloadAction<Array<IPost>>) {
      state.uploading = false;
      state.posts = action.payload;
    },
    addPostFail(state, _action: PayloadAction<any>) {
      state.uploading = false;
    },
  },
});

export const {addPost, addPostSuccess, addPostFail} = postsSlice.actions;
export default postsSlice.reducer;
