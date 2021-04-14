import React from "react";
import { NavLink } from "react-router-dom";

import routes from "../../../routers/routers";
import Diagram from "../../diagram/Diagram";
import catImages from "../../../img/catResultPage.png";

import styles from "./Results.module.scss";

const Results = () => {
  return (
    <div className={styles.results}>
      <h2 className={styles.resultTitle}>Results</h2>
      <p className={styles.resultName}>[ Testing theory_]</p>
      {/* Динамические данные */}

      <Diagram />

      <img className={styles.catImages} src={catImages} alt="cat"></img>
      <p className={styles.mainMessage}>Not Bad</p>
      {/* Динамические данные */}
      <p className={styles.secondaryMessage}>
        But you still need to learn some materials.
      </p>
      {/* Динамические данные */}

      <NavLink to={routes.test} className={styles.buttonText}>
        <button className={styles.button} type="button">
          Try again
        </button>
      </NavLink>
    </div>
  );
};

export default Results;
