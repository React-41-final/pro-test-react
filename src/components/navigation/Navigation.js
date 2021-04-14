import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Navigation.module.css";
import routes from "../../routers/routers";
import { postLogoutUser } from "../../servises/reqToApi";
import sprite from "../../sprites/sprite.svg";

const Navigation = ({ isAuthorized }) => (
  <nav className={styles.mainNav}>
    <ul>
      {isAuthorized && (
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
      {isAuthorized && (
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
    </ul>
    {isAuthorized && (
      <div className={styles.posCenter}>
        <button className={styles.logoutIcon} onClick={postLogoutUser}>
          <svg className={styles.logout1}>
            <use href={sprite + "#logOut_1"} />
          </svg>
          <svg className={styles.logout2}>
            <use href={sprite + "#logOut_2"} />
          </svg>
        </button>
      </div>
    )}
  </nav>
);

export default Navigation;
