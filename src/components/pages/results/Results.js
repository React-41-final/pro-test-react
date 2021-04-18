import React, { Component } from "react";
import { connect } from "react-redux";
import { NavLink, Redirect } from "react-router-dom";

import routes from "../../../routers/routers";
import Diagram from "../../diagram/Diagram";
import catImages from "../../../img/catResultPage.png";
import { resultsOperation } from "../../../redux/operations/resultsOperations";

import styles from "./Results.module.scss";

class Results extends Component {
  state = {};

  componentDidMount() {
    if (this.props.tests.length === 12) {
      this.props.resultsOperation(
        this.props.tests,
        "Переменная что отвечает за тим запроса"
      );
    }
  }

  componentDidUpdate(prevState, prevProps) {
    const results = this.props.results;

    if (results !== prevProps.results) {
      this.setState({ results });
    }
  }

  render() {
    return !this.state.results ? (
      <Redirect to={routes.mainPage} />
    ) : (
      <div className={styles.results}>
        <h2 className={styles.resultTitle}>Results</h2>
        <p className={styles.resultName}>
          [ Testing theory_] ORR [QA technical training]
        </p>
        <Diagram />
        <img className={styles.catImages} src={catImages} alt="cat"></img>
        <p className={styles.mainMessage}>{this.state.results.mainMessage}</p>
        <p className={styles.secondaryMessage}>
          {this.state.results.secondaryMessage}
        </p>
        <NavLink to={routes.mainPage} className={styles.buttonText}>
          <button className={styles.button} type="button">
            Try again
          </button>
        </NavLink>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  tests: state.tests.test, // Масив ответов из сторе
  results: state.resultsOfTest.results,
  // typeOfTests: state(переменная что за это отвечает),//для определения какой запрос делать
});

const mapDispatchToProps = {
  resultsOperation: resultsOperation,
};
export default connect(mapStateToProps, mapDispatchToProps)(Results);
