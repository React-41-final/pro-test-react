import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Navigation.module.css";
import routes from "../../routers/routers";
import UserInfo from "../userInfo/UserInfo";
// import postLogoutUser from "../../servises/reqToApi";

const Navigation = ({ isAuthorized = true }) => (
  <nav className={styles.mainNav}>
    <ul>
      {true && (
        <li>
          <NavLink
            to={routes.mainPage}
            exact
            className={styles.link}
            activeClassName={styles.activeLink}
          >
            Home
          </NavLink>
        </li>
      )}
      {true && (
        <li>
          <NavLink
            to={routes.usefulInfo}
            exact
            className={styles.link}
            activeClassName={styles.activeLink}
          >
            Materials
          </NavLink>
        </li>
      )}
      <li>
        <NavLink
          to={routes.contactsPage}
          exact
          className={styles.link}
          activeClassName={styles.activeLink}
        >
          Contacts
        </NavLink>
      </li>
      <li>
        <UserInfo />
      </li>
    </ul>
    <div>
      <button
        type="click"
        className={styles.headerBtn}
        // onClick={postLogoutUser}
      >
        logout
      </button>
    </div>
  </nav>
);

export default Navigation;
