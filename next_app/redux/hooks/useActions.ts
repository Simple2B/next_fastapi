import { bindActionCreators } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import { userLoginAction } from 'redux/store/reducers/LoginUserSlice';
import { userRegistrationAction } from 'redux/store/reducers/UserSlice';

const allAction = {
  ...userLoginAction,
  ...userRegistrationAction,
};

export const useActions = () => {
  const dispatch = useDispatch();

  return bindActionCreators(allAction, dispatch);
};
