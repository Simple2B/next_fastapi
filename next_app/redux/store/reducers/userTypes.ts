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
