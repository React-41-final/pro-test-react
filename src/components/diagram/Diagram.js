// import React from "react";

// const Diagram = () => {
//   return <h3>Diagram</h3>;
// };

// export default Diagram;

import React, { Component } from "react";
import { Chart } from "react-google-charts";
import styles from "./Diagram.module.scss";

class Diagram extends Component {
  state ={
    data: [
      ["Task", "Hours per Day"],
      [`${this.props.percent.slice(0, -1)}%  Correct `, Number(Math.round(this.props.percent.slice(0, -1)/100*12))], //Динамические данные
      [`${100-this.props.percent.slice(0, -1)}%  Incorrect `, 12-Number(Math.round(this.props.percent.slice(0, -1)/100*12))], //Динамические данные
    ],
  }

  render() {
    return (
      <div className={styles.container}>
        <Chart
          className={styles.chart}
          chartType="PieChart"
          loader={<div>Loading Chart</div>}
          data={this.state.data}
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
            <span className={styles.textAnswersNumber}>{Number(Math.round(this.props.percent.slice(0, -1)/100*12))}</span>
          </p>
          <p className={styles.textAnswers}>
            Total questions -{" "}
            <span className={styles.textAnswersNumber}>12</span>
          </p>
        </div>
      </div>
    );
  }
}

export default Diagram;
