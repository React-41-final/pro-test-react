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
} from "../actions/authAction";

const initialUserState = {
  email: null,
  id: null,
};

const user = createReducer(
  { ...initialUserState },
  {
    [registerSuccess]: (_, { payload }) => payload,
    [loginSuccess]: (_, { payload }) => payload.userData,
    [getUserSuccess]: (_, { payload }) => payload.userData,
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
});

const token = createReducer(null, {
  [loginSuccess]: (_, { payload }) => payload.accessToken,
  [getUserSuccess]: (_, { payload }) => payload.accessToken,
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
