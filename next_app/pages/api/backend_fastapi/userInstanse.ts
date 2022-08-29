import { IReqInfoUser } from 'redux/store/reducers/userTypes';
import { instance } from './_axiosInstance';

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
};
