import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { reportApi } from '../Service/reportApi';
import { AuthApi } from '../Service/authService';
import  UserReducer  from '../features/Auth/UserLoggedSlice';
import { clientApi } from '../Service/clientApi';

export const store = configureStore({
  reducer: {
    user: UserReducer,
    [reportApi.reducerPath]: reportApi.reducer,
    [clientApi.reducerPath]: clientApi.reducer,
    [AuthApi.reducerPath]: AuthApi.reducer,
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(reportApi.middleware, AuthApi.middleware, clientApi.middleware)
});
