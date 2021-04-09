import axios from "axios";
import authActions from "../actions/authAction";

axios.defaults.baseURL = "https://protest-backend.goit.global";

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = "";
  },
};

const register = (credentials) => (dispatch) => {
  dispatch(authActions.registerRequest());

  axios
    .post("/auth/register", credentials)
    .then((response) => {
      // console.log("response ", response.data);
      // console.log("credentials ", credentials);
      // token.set(response.data.token);
      dispatch(authActions.registerSuccess(response.data));
    })
    .catch((error) => dispatch(authActions.registerError(error)));
};

const logIn = (credentials) => (dispatch) => {
  dispatch(authActions.loginRequest());

  axios
    .post("/auth/login", credentials)
    .then((response) => {
      console.log("response ", response);
      token.set(response.data.accessToken);
      dispatch(authActions.loginSuccess(response.data));
    })
    .catch((error) => dispatch(authActions.loginError(error)));
};

export default { register, logIn };
