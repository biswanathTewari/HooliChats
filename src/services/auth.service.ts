import {callApi} from './https.service';
import {ILoginParam, ILoginRes, ISignupParam} from '../types';

export async function signUpService({
  email,
  password,
  fullName,
  userName,
}: ISignupParam): Promise<ILoginRes> {
  const response = await callApi('/api/auth/signup', {
    method: 'POST',
    body: {
      email,
      password,
      fullName,
      userName,
    },
  });

  return {
    token: response.data.encodedToken,
    user: {
      _id: response.data.createdUser._id,
      userName: response.data.createdUser.username,
      firstName: response.data.createdUser.firstName,
      lastName: response.data.createdUser.lastName,
      email: response.data.createdUser.email,
    },
  };
}

export async function loginService({
  userName,
  password,
}: ILoginParam): Promise<ILoginRes> {
  const response = await callApi('/api/auth/login', {
    method: 'POST',
    body: {
      username: userName,
      password,
    },
  });

  return {
    token: response.data.encodedToken,
    user: {
      _id: response.data.foundUser._id,
      userName: response.data.foundUser.username,
      firstName: response.data.foundUser.firstName,
      lastName: response.data.foundUser.lastName,
      email: response.data.foundUser.email,
    },
  };
}
