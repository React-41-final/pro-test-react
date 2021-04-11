import { combineReducers, createReducer } from "@reduxjs/toolkit";
import {
  registerRequest,
  registerSuccess,
  registerError,
  loginRequest,
  loginSuccess,
  loginError,
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
  }
);

const loading = createReducer(false, {
  [registerRequest]: () => true,
  [registerSuccess]: () => false,
  [registerError]: () => false,
  [loginRequest]: () => true,
  [loginSuccess]: () => false,
  [loginError]: () => false,
  // [removeContactRequest]: () => true,
  // [removeContactSuccess]: () => false,
  // [removeContactError]: () => false,
});

const token = createReducer(null, {
  [loginSuccess]: (_, { payload }) => payload.accessToken,
});

const error = createReducer(null, {
  [registerError]: (_, { payload }) => payload,
  [loginError]: (_, { payload }) => payload,
});

const authReducer = combineReducers({
  user,
  token,
  error,
  loading,
});

export { authReducer };
