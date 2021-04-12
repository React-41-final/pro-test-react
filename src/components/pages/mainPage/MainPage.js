import React from "react";
import { Link } from "react-router-dom";
import sprite from "../../../sprites/sprite.svg";
import styles from "./MainPage.module.css";

const MainPage = () => {
  return (
    <div className={styles.container}>
      <blockquote className={styles.quote}>
        “Regression testing. What is it?{" "}
        <span className={styles.quote__span}>
          If the system compiles, that's good, if it boots, that's great!”
        </span>
      </blockquote>
      <hr className={styles.line} />
      <section className={styles.authorBox}>
        <div className={styles.authorBox__author}>Linus Torvalds</div>
        <div className={styles.authorBox__description}>
          Linux kernel creator, hacker, 1969
        </div>
      </section>
      <section className={styles["link-box"]}>
        <Link className={styles["link-box__technical"]} to="/test">
          <span className={styles["link-box__text"]}>
            QA technical training
          </span>
          <span className={styles["link-box__link"]}>
            <svg className={styles["link-box__svg"]}>
              <use href={sprite + "#arrow"}></use>
            </svg>
          </span>
        </Link>
        <Link className={styles["link-box__theory"]} to="/test">
          <span className={styles["link-box__text"]}>Testing theory</span>
          <span className={styles["link-box__link"]}>
            <svg className={styles["link-box__svg"]}>
              <use href={sprite + "#arrow"}></use>
            </svg>
          </span>
        </Link>
      </section>
    </div>
  );
};

export default MainPage;
