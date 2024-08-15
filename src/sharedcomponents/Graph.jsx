import React from "react";
import { Bar, Line } from "react-chartjs-2";
import "./Graph.scss";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  BarElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";


ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  BarElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const Graph = () => {
  const barData = {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
      {
        label: "Books available",
        backgroundColor: " #c09d73",
        borderColor: "black",
        borderWidth: 1,
        hoverBackgroundColor: "rgba(75,192,192,0.4)",
        hoverBorderColor: "rgba(75,192,192,1)",

        data: [20, 40, 80, 250, 156, 255, 400],
      },
    ],
  };

  const lineData = {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
      {
        label: "User Traffic",
        fill: false,
        lineTension: 0.1,
        backgroundColor: "rgba(75,192,192,0.4)",
        borderColor: "rgba(75,192,192,1)",
        borderCapStyle: "butt",
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: "miter",
        pointBorderColor: "rgba(75,192,192,1)",
        pointBackgroundColor: "#fff",
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: "rgba(75,192,192,1)",
        pointHoverBorderColor: "rgba(220,220,220,1)",
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: [65, 59, 12,58,96, 50],
      },
    ],
  };
  const revenue = {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
      {
        label: "revenue generated",
        
        backgroundColor: " white",
        borderColor: "black",
        borderWidth: 1,
        hoverBackgroundColor: "rgba(75,192,192,0.4)",
        hoverBorderColor: "rgba(75,192,192,1)",

        data: [20000, 40000, 80000, 250000, 156000, 255000, 40000],
      },
    ],
  };

  const options = {
    maintainAspectRatio: false,
  };
  const horoptions = {

    maintainAspectRatio: false,
    indexAxis : "y",
    elements: {
        bar: {
          barThickness: 20, // Adjust this value to set bar thickness
          maxBarThickness: 30, // Maximum bar thickness
        },
      },
  }

  return (
    <>
      <div className="graph-containers">
        <div className="graphs">
          <div className="bar">
            <div className="Component">
              <Bar data={barData} options={options} />
            </div>
          </div>

          <div className="line">
            <div className="Component">
              <Line data={lineData} options={options} />
            </div>
          </div>



        </div>

<div className="horizontal-bar">

<div className="Component">


<Bar    data={revenue}  options={horoptions}  />





</div>



</div>




      </div>
    </>
  );
};

export default Graph;
