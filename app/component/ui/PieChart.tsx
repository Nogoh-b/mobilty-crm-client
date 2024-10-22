// components/PieChart.js
'use client'
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend, ChartOptions } from 'chart.js';
import { PieChartData } from '@/app/constants/AppConstants';

ChartJS.register(ArcElement, Tooltip, Legend);

const PieChart = ({data}:{data?: PieChartData}) => {
  if(!data)
    data = {
      labels: ['Red', 'Blue', 'Yellow', 'Grey'],
      datasets: [
        {
          label: 'My First Dataset',
          data: [20, 50, 50, 90],
          backgroundColor: [
            'rgb(255, 99, 132)',
            'rgb(255, 205, 86)',
            'rgb(54, 162, 235)',
            'rgb(117, 187, 190)',
          ],
          hoverOffset: 4,
        },
      ],
    };

  const options: ChartOptions<'pie'>  = {
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

  return <Pie data={data} options={options} />;
};

export default PieChart;
