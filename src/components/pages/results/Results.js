import React, { Component } from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";

import routes from "../../../routers/routers";
import Diagram from "../../diagram/Diagram";
import catImages from "../../../img/catResultPage.png";
import { resultsOperation } from "../../../redux/operations/resultsOperations";

import styles from "./Results.module.scss";

class Results extends Component {
  state = {
    answers: null,
  };

  componentDidMount() {
    console.log(this.props.tests);
    // this.props.resultsOperation(this.props.tests);
  }

  render() {
    const { answers } = this.state;

    return answers == null ? (
      <div className={styles.results}>
        <p className={styles.resultTitle}>Please take the test</p>
        <NavLink to={routes.test} className={styles.buttonText}>
          <button className={styles.button} type="button">
            Tests
          </button>
        </NavLink>
      </div>
    ) : (
      <div className={styles.results}>
        <h2 className={styles.resultTitle}>Results</h2>
        <p className={styles.resultName}>[ Testing theory_]</p>

        <Diagram percent={answers.result} />

        <img className={styles.catImages} src={catImages} alt="cat"></img>
        <p className={styles.mainMessage}>{answers.mainMessage}</p>
        <p className={styles.secondaryMessage}>{answers.secondaryMessage}</p>

        <NavLink to={routes.test} className={styles.buttonText}>
          <button className={styles.button} type="button">
            Try again
          </button>
        </NavLink>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  tests: state.resultsOfTest.test,
});

const mapDispatchToProps = {
  resultsOperation: resultsOperation,
};
export default connect(mapStateToProps, mapDispatchToProps)(Results);
