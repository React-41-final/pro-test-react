import React, { Component } from "react";
import { connect } from "react-redux";

import { Chart } from "react-google-charts";
import styles from "./Diagram.module.scss";

class Diagram extends Component {
  state = {
    percent: null,
  };

  componentDidMount() {
    if (this.props.results.result) {
      const percent = this.props.results.result.slice(0, -1);
      this.setState( { ...this.state.percent, percent });
    }
  }

  render() {
    return (this.state.percent !== null) ? (
      <div className={styles.container}>
        <Chart
          className={styles.chart}
          chartType="PieChart"
          loader={<div>Loading Chart</div>}
          data={[
            ["Task", "Hours per Day"],
            [`${this.state.percent}%  Correct `, Number(Math.round(this.state.percent/100*12))], 
            [`${100-this.state.percent}%  Incorrect `, 12-Number(Math.round(this.state.percent/100*12))], 
          ]}
          options={{
            pieStartAngle: 100,
            pieSliceText: "none",
            slices: {
              0: { color: "#FF6B01" },
              1: { color: "#D7D7D7" },
            },
            chartArea: { left: 100, top: 10, width: "90%", height: "90%" },
          }}
          rootProps={{ "data-testid": "1" }}
        />
        <div className={styles.answers}>
          <p className={styles.textAnswers}>
            Correct answers -{" "}
            <span className={styles.textAnswersNumber}>
              {Number(Math.round((this.state.percent / 100) * 12))}
            </span>
          </p>
          <p className={styles.textAnswers}>
            Total questions -{" "}
            <span className={styles.textAnswersNumber}>12</span>
          </p>
        </div>
      </div>) : <></>
  }
}

const mapStateToProps = (state) => ({
  results: state.resultsOfTest.results,
});

export default connect(mapStateToProps)(Diagram);
