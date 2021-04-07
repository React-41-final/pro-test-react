import { combineReducers, createReducer } from '@reduxjs/toolkit';

const initialUserState = {
  name: null,
  email: null,
};

const user = createReducer({ ...initialUserState }, {});

const token = createReducer(null, {});

const error = createReducer(null, {});

const authReduser = combineReducers({
  user,
  token,
  error,
});

export { authReduser };
