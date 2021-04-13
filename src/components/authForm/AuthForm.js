import React, { Component } from "react";
import { connect } from "react-redux";
import { CSSTransition } from "react-transition-group";
import { register, logIn } from "../../redux/operations/authOperations";
import s from "./AuthForm.module.scss";
import ModalErrorMessage from "./modalErrorMessage/ModalErrorMessage";
import styles from "./modalAnimation.module.scss";

class AuthForm extends Component {
  state = {
    email: "",
    password: "",
  };

  componentWillUnmount() {
    this.setState({ email: "", password: "" });
  }

  onHandleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  onHandleSubmit = async (e) => {
    e.preventDefault();
    const target = e.nativeEvent.submitter.dataset.action;

    if (target === "login") {
      await this.props.onLogin({ ...this.state });
    } else {
      await this.props.onRegister({ ...this.state });
      await this.props.onLogin({ ...this.state });
    }
    this.props.history.replace("/");
  };

  onHandleSigIn = async () => {
    window.location.replace("https://protest-backend.goit.global/auth/google");
  };

  render() {
    const { email, password } = this.state;
    const { error } = this.props;
    return (
      <div className={s.container}>
        <CSSTransition
          in={!!error}
          classNames={styles}
          timeout={500}
          unmountOnExit
        >
          <ModalErrorMessage />
        </CSSTransition>
        <p className={s.desc}>You can use your Google Account to authorize:</p>

        <button onClick={this.onHandleSigIn} className={s.googleButton}>
          Google
        </button>
        <p className={s.desc}>Or login to our app using e-mail and password:</p>

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
            <button type="submit" className={s.button} data-action="login">
              Sign in
            </button>
            <button type="submit" className={s.button} data-action="signup">
              Sign up
            </button>
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  error: state.auth.error,
});

const mapDispatchToProps = {
  onRegister: register,
  onLogin: logIn,
};

export default connect(mapStateToProps, mapDispatchToProps)(AuthForm);
