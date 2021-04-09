// import React from "react";

// const Diagram = () => {
//   return <h3>Diagram</h3>;
// };

// export default Diagram;

import React from "react";
import { Chart } from "react-google-charts";
import styles from "./Diagram.module.scss";

// const indexChart = window.innerWidth >= 768 ? 160 : 0;

const Diagram = () => {
  return (
    <div className={styles.container}>
      <Chart
        className={styles.chart}
        chartType="PieChart"
        loader={<div>Loading Chart</div>}
        data={[
          ["Task", "Hours per Day"],
          ["92%  Correct ", 11], //Динамические данные
          ["8%  Incorrect ", 2], //Динамические данные
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
          Correct answers - <span className={styles.textAnswersNumber}>9</span>
          {/* Динамические данные */}
        </p>
        <p className={styles.textAnswers}>
          Total questions - <span className={styles.textAnswersNumber}>13</span>
          {/* Динамические данные */}
        </p>
      </div>
    </div>
  );
};

export default Diagram;
