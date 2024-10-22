// components/DoughnutChart.js
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend, ChartOptions } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const DoughnutChart = ({ data }) => {
  const options: ChartOptions<'doughnut'> = {
    plugins: {
      legend: {
        position: 'bottom', // Utilisez une des valeurs acceptées
        labels: {
          boxWidth: 20,
          boxHeight: 20,
        },
      },
    },
  };

  return <Doughnut  data={data} options={options} />;
};

export default DoughnutChart;
