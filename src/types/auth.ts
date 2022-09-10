export interface IUser {
  _id: string;
  userName: string;
  firstName: string;
  lastName: string;
  email: string;
}

export interface ILoginParam {
  userName: string;
  password: string;
}

export interface ILoginRes {
  token: string;
  user: IUser;
}

export interface ISignupParam {
  email: string;
  password: string;
  fullName: string;
  userName: string;
}

export interface IAuth {
  token: string | null;
  loading: boolean;
  error: string | null;
  user: IUser | null;
  firstTime: boolean;
  loggedIn: boolean;
}
