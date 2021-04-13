import { combineReducers, createReducer } from "@reduxjs/toolkit";
import {
  registerRequest,
  registerSuccess,
  registerError,
  loginRequest,
  loginSuccess,
  loginError,
  getUserRequest,
  getUserSuccess,
  getUserError,
  refreshSuccess,
  refreshRequest,
  refreshError,
} from "../actions/authAction";

const initialUserState = {
  accessToken: null,
  refreshToken: null,
  sid: null,
  userData: {
    email: null,
    id: null,
  },
};

const user = createReducer(
  { ...initialUserState },
  {
    [registerSuccess]: (_, { payload }) => payload,
    [loginSuccess]: (_, { payload }) => payload,
    [getUserSuccess]: (_, { payload }) => payload,
    [refreshSuccess]: (state, { payload }) => ({
      ...state,
      accessToken: payload.newAccessToken,
      refreshToken: payload.newRefreshToken,
      sid: payload.newSid,
    }),
  }
);

const loading = createReducer(false, {
  [registerRequest]: () => true,
  [registerSuccess]: () => false,
  [registerError]: () => false,
  [loginRequest]: () => true,
  [loginSuccess]: () => false,
  [loginError]: () => false,
  [getUserRequest]: () => true,
  [getUserSuccess]: () => false,
  [getUserError]: () => false,
  [refreshRequest]: () => true,
  [refreshSuccess]: () => false,
  [refreshError]: () => false,
});

const token = createReducer(null, {
  [loginSuccess]: (_, { payload }) => payload.accessToken,
  [getUserSuccess]: (_, { payload }) => payload.accessToken,
  [refreshSuccess]: (_, { payload }) => payload.newAccessToken,
});

const error = createReducer(null, {
  [registerError]: (_, { payload }) => payload,
  [loginError]: (_, { payload }) => payload,
  [getUserError]: (_, { payload }) => payload,
});

const authReducer = combineReducers({
  user,
  token,
  error,
  loading,
});

export { authReducer };
