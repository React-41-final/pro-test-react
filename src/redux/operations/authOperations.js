import {
  registerRequest,
  registerSuccess,
  registerError,
  loginRequest,
  loginSuccess,
  loginError,
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

const getUserGoogle = (tokenData) => async (dispatch) => {
  dispatch(getUserRequest());
  try {
    let data = {};
    const user = await getUser(tokenData.accessToken);
    data = { userData: user, ...tokenData };
    // data.userData = user;
    // data.tokens = tokenData;
    dispatch(getUserSuccess(data));
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

export { register, logIn, getUserGoogle, refreshToken };
