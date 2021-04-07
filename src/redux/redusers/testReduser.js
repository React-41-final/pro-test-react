import { combineReducers, createReducer } from "@reduxjs/toolkit";

const initialUserState = {};

const test = createReducer({ ...initialUserState }, {});

const error = createReducer(null, {});

const testReduser = combineReducers({
  test,
  error,
});

export { testReduser };
