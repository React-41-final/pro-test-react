import { combineReducers, createReducer } from '@reduxjs/toolkit';

const initialUserState = {};

const results = createReducer({ ...initialUserState }, {});

const error = createReducer(null, {});

const resultsReducer = combineReducers({
  results,
  error,
});

export { resultsReducer };
