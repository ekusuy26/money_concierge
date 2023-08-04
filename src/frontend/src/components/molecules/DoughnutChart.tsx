import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import ChartDataLabels from "chartjs-plugin-datalabels";

ChartJS.register(ArcElement, Tooltip, Legend, ChartDataLabels);

export default function DoughnutChart() {
  const data = {
    labels: ["Red", "Blue", "Yellow"],
    datasets: [
      {
        data: [300, 500, 100],
        backgroundColor: [
          "rgb(255, 99, 132)",
          "rgb(54, 162, 235)",
          "rgb(255, 205, 86)",
        ],
        hoverOffset: 4,
        datalabels: {
          formatter: (value, context) => {
            const label = context.chart.data.labels[context.dataIndex];
            return label;
          },
        },
      },
    ],
  };
  const options = {
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        enabled: false,
      },
    },
  };

  return <Doughnut data={data} options={options} />;
}
