import React, { Component } from "react";
import { connect } from "react-redux";
import { CSSTransition } from "react-transition-group";
import Logo from "../logo/Logo";
import Navigation from "../navigation/Navigation";
import UserInfo from "../userInfo/UserInfo";
import sprite from "../../sprites/sprite.svg";
import styles from "./Header.module.scss";

class Header extends Component {
  state = {
    isModalOn: false,
  };
  handleModal = () => this.setState({ isModalOn: !this.state.isModalOn });

  render() {
    const { isModalOn } = this.state;
    const { isAuthorized } = this.props;
    return (
      <>
        <CSSTransition
          in={true}
          appear={true}
          timeout={250}
          classNames={styles}
          unmountOnExit
        >
          <div className={styles.wrapper}>
            <div className={styles.container}>
              <Logo />
              <div className={styles.nav}>
                <CSSTransition
                  in={true}
                  appear={true}
                  timeout={250}
                  classNames={styles}
                  unmountOnExit
                >
                  <Navigation isAuthorized={isAuthorized} />
                </CSSTransition>
              </div>
              {isAuthorized ? <UserInfo /> : false}
              {isModalOn ? (
                <div className={styles.burger}>
                  <svg className={styles.burgerOn} onClick={this.handleModal}>
                    <use href={sprite + "#close"} />
                  </svg>
                </div>
              ) : (
                <div className={styles.burger}>
                  <svg className={styles.burgerOn} onClick={this.handleModal}>
                    <use href={sprite + "#burger"} />
                  </svg>
                </div>
              )}
            </div>
          </div>
        </CSSTransition>

        <CSSTransition
          in={isModalOn}
          timeout={250}
          classNames={styles}
          unmountOnExit
        >
          <Navigation isAuthorized={isAuthorized} />
        </CSSTransition>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  isAuthorized: state.auth.token,
});

export default connect(mapStateToProps)(Header);
