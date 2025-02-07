import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { FaTemperatureHigh } from 'react-icons/fa';

ChartJS.register(ArcElement, Tooltip, Legend);

export const DonutChart = ({ temperature , icon , unitOfMeasurement }) => {
  const data = {
    datasets: [
      {
        data: [temperature, 100 - temperature],
        backgroundColor: ['#EED3B1', '#E8ECD7'],
        borderWidth: 0,
      },
    ],
  };

  const options = {
    cutout: '80%',
    plugins: {
      tooltip: {
        enabled: false,
      },
      legend: {
        display: false,
      },
    },
  };

  return (
    <div className="relative w-full h-full">
      <Doughnut data={data} options={options} />
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        {icon}
        <div className='font-medium text-[#f1e8dd] text-2xl font-jaro'>{temperature}{unitOfMeasurement}</div>
      </div>
    </div>
  );
};

 
