import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import ChartDataLabels from "chartjs-plugin-datalabels";

ChartJS.register(ArcElement, Tooltip, Legend, ChartDataLabels);

export default function DoughnutChart({ labels, colors, values }) {
  const data = {
    labels: labels,
    datasets: [
      {
        data: values,
        backgroundColor: colors,
        hoverOffset: 4,
        datalabels: {
          formatter: (value, context) => {
            const label = context.chart.data.labels[context.dataIndex];
            return label;
          },
          align: "right",
          font: {
            size: "10",
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
