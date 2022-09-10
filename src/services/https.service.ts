import axios, {Method} from 'axios';
import {store} from '../store';

interface ApiConfig {
  method: Method;
  body?: any;
  headers?: any;
  params?: any;
}

export async function callApi(
  endpoint: string,
  {method, body, headers, params}: ApiConfig = {method: 'GET'},
) {
  let authToken;
  let auth = await store.getState().auth.token;

  if (auth) authToken = auth;

  return axios({
    method: method,
    url: endpoint, //TODO: `${API_URL}${endpoint}`,
    data: body,
    params: params,
    headers: {
      'Content-Type': 'application/json',
      authorization: authToken,
      Accept: 'application/json',
      ...headers,
    },
  }).catch(e => {
    if (e.response?.data?.errors?.length > 0) {
      throw new Error(e.response.data.errors[0]);
    } else {
      throw e;
    }
  });
}
