import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { userApiServices } from '../services/UserServices';
// import UserReducer from './reducers/userSlice';

const rootReducer = combineReducers({
  // UserReducer,
  [userApiServices.reducerPath]: userApiServices.reducer,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => {
      return getDefaultMiddleware().concat(userApiServices.middleware);
    },
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
