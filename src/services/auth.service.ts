import {callApi} from './https.service';
import {ILoginParam, ILoginRes} from '../types';

// export async function signUpService({email, password}: IAuthParam) {
//   const response = await callApi('/api/auth/signup', {
//     method: 'POST',
//     body: {
//       email,
//       password,
//     },
//   });

//   return response;
// }

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
