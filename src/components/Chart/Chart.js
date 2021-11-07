import "./Chart.css";

import ChartBar from "./ChartBar";

const Chart = (props) => {
  // transform objects to numbers
  const dataPointValues = props.dataPoints.map((dataPoint) => dataPoint.value);

  // the use spread operator to take the Array and use single values
  const totalMaximum = Math.max(...dataPointValues);

  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          maxValue={totalMaximum}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
};

export default Chart;
