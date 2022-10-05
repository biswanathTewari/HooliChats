import {callApi} from './https.service';
import {IPostReq, IPost} from '../types';

export const addPostService = async (post: IPostReq): Promise<Array<IPost>> => {
  const response = await callApi('/api/posts', {
    method: 'POST',
    body: {
      postData: post,
    },
  });
  return response.data.posts;
};
