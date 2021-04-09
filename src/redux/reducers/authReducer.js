import { combineReducers, createReducer } from "@reduxjs/toolkit";
import authActions from "../actions/authAction";

const initialUserState = {
  email: null,
  id: null,
};

const user = createReducer(
  { ...initialUserState },
  {
    [authActions.registerSuccess]: (_, { payload }) => payload,
    // {
    //   console.log("payload register ", payload);
    // },
    [authActions.loginSuccess]: (_, { payload }) => payload.userData,
    //  {
    //   console.log(payload.userData);
    // },
  }
);

const token = createReducer(null, {
  [authActions.loginSuccess]: (_, { payload }) => payload.accessToken,
});

const error = createReducer(null, {
  [authActions.registerError]: (_, { payload }) => payload,
  [authActions.loginError]: (_, { payload }) => payload,
});

const authReducer = combineReducers({
  user,
  token,
  error,
});

export { authReducer };
