export interface IReqInfoUser {
  id?: number;
  username: string;
  email: string;
  // phone: string;
  password: string;
  info_registration?: string;
}

export interface IUserState {
  user: IReqInfoUser;
  isLoading: boolean;
  error: string;
}

export interface IUserLogin {
  username: string;
  password: string;
}

export interface IUserLoginState {
  user: IUserToken;
  isLoading: boolean;
  error: string;
}

export interface IUserToken {
  access_token: string;
  token_type: string;
}
