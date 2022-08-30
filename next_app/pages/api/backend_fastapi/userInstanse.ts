import { IReqInfoUser, IUserToken } from 'redux/store/reducers/userTypes';
import { instance } from './_axiosInstance';

const formatRequestBody = (username: string, password: string) => {
  const formData = new FormData();
  formData.append('username', username);
  formData.append('password', password);
  return formData;
};

const formatRequestBodyApiKey = (password: string, api_key: string) => {
  const params = {
    password: password,
    api_key: api_key,
  };
  return params;
};

export const userApi = {
  registrationUser: async (data: IReqInfoUser): Promise<IReqInfoUser> => {
    try {
      const response = await instance().post('/user/registration', data);
      return response.data;
    } catch (error: any) {
      console.log(`POST registrationUser: error message => ${error}`);
      return error;
    }
  },
  checkEmail: async (data: { email: string }): Promise<string> => {
    try {
      const response = await instance().post('/user/check_email', data);
      return response.data;
    } catch (error: any) {
      console.log(`POST registrationUser: error message => ${error}`);
      return error;
    }
  },
  login: async (username: string, password: string): Promise<IUserToken> => {
    console.log(
      'formatRequestBody(username, password) ',
      formatRequestBody(username, password)
    );

    try {
      const response = await instance().post(
        '/login',
        formatRequestBody(username, password)
      );
      return response.data;
    } catch (error: any) {
      console.log(`POST registrationUser: error message => ${error}`);
      return error;
    }
  },
};
