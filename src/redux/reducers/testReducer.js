import { combineReducers, createReducer } from "@reduxjs/toolkit";
import { _Request, _Success, _Error } from "../actions/testAction";

const test = createReducer(
  {},
  {
    [_Success]: (_, { payload }) => payload.data,
  }
);

const type = createReducer(null, {
  [_Success]: (_, { payload }) => payload.type,
});

const loading = createReducer(null, {
  [_Request]: () => true,
  [_Success]: () => false,
  [_Error]: () => false,
});

const error = createReducer(null, {
  [_Error]: (_, { payload }) => payload,
});

const testReducer = combineReducers({
  test,
  type,
  loading,
  error,
});

export { testReducer };
