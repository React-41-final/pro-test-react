import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Navigation.module.css";
import routes from "../../routers/routers";

const Navigation = ({ isAuthorized = true }) => (
  <nav className={styles.mainNav}>
    <ul >
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
      <li>
        <NavLink
          to={routes.test}
          exact
          className={styles.link}
          activeClassName={styles.activeLink}
        >
          Materials
        </NavLink>
      </li>
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
  </nav>
);

export default Navigation;
