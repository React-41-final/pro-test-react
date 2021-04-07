import { combineReducers, createReducer } from "@reduxjs/toolkit";

const initialUserState = {
  name: null,
  email: null,
};

const user = createReducer({ ...initialUserState }, {});

const error = createReducer(null, {});

const authReduser = combineReducers({
  user,
  error,
});

export { authReduser };
