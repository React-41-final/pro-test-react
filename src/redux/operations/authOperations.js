import {
  registerRequest,
  registerSuccess,
  registerError,
  loginRequest,
  loginSuccess,
  loginError,
  refreshRequest,
  refreshSuccess,
  refreshError,
} from "../actions/authAction";
import {
  postRegister,
  postSignInUser,
  postRefreshUser,
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

export { register, logIn, refreshToken };
