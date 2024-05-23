// components/PolarAreaChart.js
import { PolarArea } from 'react-chartjs-2';
import { Chart as ChartJS, RadialLinearScale, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(RadialLinearScale, ArcElement, Tooltip, Legend);

const PolarAreaChart = ({ data }) => {
  const options = {
    plugins: {
      legend: {
        position: 'bottom',
        labels: {
          boxWidth: 20,
          boxHeight: 20,
        },
      },
    },
  };

  return <PolarArea data={data} options={options} />;
};

export default PolarAreaChart;