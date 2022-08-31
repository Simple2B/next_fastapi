import { combineReducers, configureStore } from '@reduxjs/toolkit';
// import { setupListeners } from '@reduxjs/toolkit/dist/query';
import { userApiServices } from '../services/UserServices';
import { userLoginReducer } from './reducers/LoginUserSlice';
import { userRegistrationReducer } from './reducers/UserSlice';
import { createWrapper } from 'next-redux-wrapper';

// import UserReducer from './reducers/userSlice';

const rootReducer = combineReducers({
  // UserReducer,
  [userApiServices.reducerPath]: userApiServices.reducer,
  userRegistration: userRegistrationReducer,
  userLogin: userLoginReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(userApiServices.middleware);
  },
});

export type TypeRootState = ReturnType<typeof store.getState>;

export const setupStore = () => store;

// setupListeners(setupStore().dispatch);

export const wrapper = createWrapper(setupStore);

// export type RootState = ReturnType<typeof rootReducer>;
// export type AppStore = ReturnType<typeof setupStore>;
// export type AppDispatch = AppStore['dispatch'];
