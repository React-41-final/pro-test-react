import React, { Component } from "react";
import { connect } from "react-redux";
import AuthForm from "../../authForm/AuthForm";
import s from "./AuthPage.module.scss";

class AuthPage extends Component {
  render() {
    return (
      <div className={s.container}>
        <div className={s.inner}>
          <div className={s.box}>
            <h2 className={s.header}>Pro Test</h2>
            <p className={s.content}>
              [ We will help you find weak points in knowledge so that you can
              strengthen it. We will show you what is relevant to know for a{" "}
              <span className={s.contentAccent}>QA Engineer</span> and will try
              to make the learning process more diverse_ ]
            </p>
          </div>
          <AuthForm history={this.props.history} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.token,
});

export default connect(mapStateToProps)(AuthPage);
