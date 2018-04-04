import React, { Component } from 'react';
import {Line} from 'react-chartjs-2';

const data = {
  labels: ['2014', '2015', '2016'],
  datasets: [
    {
      data: [73, 199, 395],
      backgroundColor: ['hsla(0, 0%, 0%, 0.05) '],
      borderColor: ['black'],
      borderWidth: 2,
      label: 'Galvanize Grads Per Year',
      pointStyle: 'circle',
      radius: 5,
    },
  ],
  options: {
    scales: {
      yAxes: [{
          ticks: {
            beginAtZero: true,
            steps: 25,
            stepValue: 5,
            max: 500
          },
          scaleLabel: {
            display: true,
            labelString: 'Number of Students',
            fontSize: 20,
          },
        },
      ],
      xAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
          scaleLabel: {
            display: true,
            labelString: 'Year',
            fontSize: 20,
          },
        },
      ],
    },
    layout: {
      padding: {
        left: 100,
        right: 100,
        top: 0,
        bottom: 0,
      },
    },
  }
}

class LineChart extends Component {
  displayName: 'LineExample'

  render() {
    return (
      <div>
        <Line data={data} options={data.options} />
      </div>
    );
  }
};

export default LineChart;
