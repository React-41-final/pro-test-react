import { combineReducers, createReducer } from '@reduxjs/toolkit';

const initialUserState = {};

const test = createReducer({ ...initialUserState }, {});

const error = createReducer(null, {});

const testReducer = combineReducers({
  test,
  error,
});

export { testReducer };
