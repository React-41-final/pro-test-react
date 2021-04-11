import React, { Component } from "react";
import { GoogleLogin } from "react-google-login";
import { connect } from "react-redux";
import {
  googleLogin,
  getUserGoogle,
} from "../../redux/operations/authOperations";

class Google extends Component {
  state = {};

  responseGoogle = (response) => {
    console.log("response ", response);
    this.props.onGoogleLogin();
    // this.props.onGetUserGoogle()
  };

  responseGoogleError = (response) => {
    console.log("error ", response);
  };

  render() {
    return (
      <>
        <GoogleLogin
          clientId="315076452469-fko5cu4k7gsh75i28ku0fl1vmm00el0j.apps.googleusercontent.com"
          buttonText="Login"
          onSuccess={this.responseGoogle}
          onFailure={this.responseGoogleError}
          cookiePolicy={"single_host_origin"}
        />
      </>
    );
  }
}

const mapDispatchToProps = {
  onGoogleLogin: googleLogin,
  onGetUserGoogle: getUserGoogle,
};

export default connect(null, mapDispatchToProps)(Google);
