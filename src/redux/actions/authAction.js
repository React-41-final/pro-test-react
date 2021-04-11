import { createAction } from "@reduxjs/toolkit";

const registerRequest = createAction("auth/registerRequest");
const registerSuccess = createAction("auth/registerSuccess");
const registerError = createAction("auth/registerError");

const loginRequest = createAction("auth/loginRequest");
const loginSuccess = createAction("auth/loginSuccess");
const loginError = createAction("auth/loginError");

const googleLoginRequest = createAction("auth/googleLoginRequest");
const googleLoginSuccess = createAction("auth/googleLoginSuccess");
const googleLoginError = createAction("auth/googleLoginError");

const getUserRequest = createAction("auth/getUserRequest");
const getUserSuccess = createAction("auth/getUserSuccess");
const getUserError = createAction("auth/getUserError");

const refreshRequest = createAction("auth/refreshRequest");
const refreshSuccess = createAction("auth/refreshSuccess");
const refreshError = createAction("auth/refreshError");

export {
  registerRequest,
  registerSuccess,
  registerError,
  loginRequest,
  loginSuccess,
  loginError,
  googleLoginRequest,
  googleLoginSuccess,
  googleLoginError,
  getUserRequest,
  getUserSuccess,
  getUserError,
  refreshRequest,
  refreshSuccess,
  refreshError,
};

// const _Request = createAction("@auth/_Requestt");
// const _Success = createAction("@auth/_Success");
// const _Error = createAction("@auth/_Errror");

// export { _Error, _Success, _Request };
