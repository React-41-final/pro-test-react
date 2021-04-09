import React, { Component } from "react";
import { connect } from "react-redux";
import authOperations from "../../redux/operations/authOperations";
import s from "./AuthForm.module.css";

class AuthForm extends Component {
  state = {
    email: "",
    password: "",
  };

  onHandleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  // onHandleSubmit = (e) => {
  //   e.preventDefault();
  //   // this.props.onRegister({ ...this.state });
  //   // this.props.onLogin({ ...this.state });
  //   // this.setState({ email: "", password: "" });
  // };

  onHandleLogin = (e) => {
    e.preventDefault();
    if (!this.state.email || !this.state.password) {
      alert("Empty space!");
      return;
    }
    this.props.onLogin({ ...this.state });
    // console.log("state ", this.state);
    this.setState({ email: "", password: "" });
  };

  onHandleRegister = (e) => {
    e.preventDefault();
    if (!this.state.email || !this.state.password) {
      alert("Empty space!");
      return;
    }
    this.props.onRegister({ ...this.state });
    // console.log("state ", this.state);
    this.setState({ email: "", password: "" });
  };

  render() {
    const { email, password } = this.state;
    return (
      <div className={s.container}>
        <p className={s.desc}>You can use your Google Account to authorize:</p>
        <button className={s.googleButton}>Google</button>
        <p className={s.desc}>
          Or login to our app using e-mail {this.props.email} and password:
        </p>

        <form className={s.form} onSubmit={this.onHandleSubmit}>
          <input
            type="email"
            className={s.input}
            name="email"
            value={email}
            placeholder="E-mail"
            required
            onChange={this.onHandleChange}
          />
          <input
            type="password"
            className={s.input}
            name="password"
            value={password}
            placeholder="Password"
            required
            onChange={this.onHandleChange}
          />
          <div className={s.buttonContainer}>
            <button
              type="submit"
              className={s.button}
              onClick={this.onHandleLogin}
            >
              Sign in
            </button>
            <button
              type="submit"
              className={s.button}
              onClick={this.onHandleRegister}
            >
              Sign up
            </button>
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.auth.user.email,
});

const mapDispatchToProps = {
  onRegister: authOperations.register,
  onLogin: authOperations.logIn,
};

// export default connect(AuthForm);
export default connect(mapStateToProps, mapDispatchToProps)(AuthForm);
