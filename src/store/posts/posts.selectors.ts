import {AppState} from '..';

const getAllPosts = (state: AppState) => state.posts.posts;

export const postsSelectors = {
  getAllPosts,
};
