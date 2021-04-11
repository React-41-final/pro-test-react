import {
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
} from "../actions/authAction";
import {
  postRegister,
  postSignInUser,
  getGoogleLogin,
  postRefreshUser,
  getUser,
} from "../../servises/reqToApi";

const register = (credentials) => async (dispatch) => {
  dispatch(registerRequest());
  try {
    const user = await postRegister(credentials);
    dispatch(registerSuccess(user));
  } catch (error) {
    dispatch(registerError(error));
  }
};

const logIn = (credentials) => async (dispatch) => {
  dispatch(loginRequest());
  try {
    const user = await postSignInUser(credentials);
    dispatch(loginSuccess(user));
  } catch (error) {
    dispatch(loginError(error));
  }
};

const googleLogin = () => async (dispatch) => {
  dispatch(googleLoginRequest());
  try {
    const user = await getGoogleLogin();
    console.log("user ", user);
    dispatch(googleLoginSuccess(user));
  } catch (error) {
    dispatch(googleLoginError(error));
  }
};

const getUserGoogle = () => async (dispatch) => {
  dispatch(getUserRequest());
  try {
    const user = await getUser();
    console.log("user ", user);
    dispatch(getUserSuccess(user));
  } catch (error) {
    dispatch(getUserError(error));
  }
};

const refreshToken = (credentials) => async (dispatch, getState) => {
  const {
    auth: { token: persistedToken },
  } = getState();

  const {
    auth: { user: refreshUser },
  } = getState();

  if (persistedToken) {
    dispatch(refreshRequest());
    try {
      const user = await postRefreshUser(persistedToken, refreshUser.id);
      dispatch(refreshSuccess(user));
    } catch (error) {
      dispatch(refreshError(error));
    }
  }
};

export { register, logIn, googleLogin, getUserGoogle, refreshToken };
