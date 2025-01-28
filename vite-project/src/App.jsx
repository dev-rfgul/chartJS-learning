import React from 'react'
import { Chart as ChartJS ,defaults} from 'chart.js/auto'
import { Bar, Doughnut, Line } from 'react-chartjs-2'

import data from './data.json'
import doughnut from './doughnut.json'
import line from './line.json'

defaults.maintainAspectRatio = false,
defaults.responsive = true
const App = () => {
  return (
    <div className=''>
      <div>
        <Bar
          data={
            {
              labels: data.map((data) => data.label),
              datasets: [
                {
                  // label: data.map((data) => data.label),
                  data: data.map((data) => data.data),
                  backgroundColor: [
                    "rgba(255, 99, 132, 0.2)",
                    "rgba(54, 162, 235, 0.2)",
                    "rgba(255, 206, 86, 0.2)",
                    "rgba(75, 192, 192, 0.2)",
                    "rgba(153, 102, 255, 0.2)",
                    "rgba(255, 159, 64, 0.2)"


                  ]
                },

              ]
            }
          }
        />
      </div>
      <div>
        <Doughnut
          data={
            {
              labels: doughnut.map((data) => data.label),
              datasets: [
                {
                  // label: data.map((data) => data.label),
                  data: doughnut.map((data) => data.data),
                  backgroundColor: [
                    "rgba(255, 99, 132, 0.2)",
                    "rgba(54, 162, 235, 0.2)",
                    "rgba(255, 206, 86, 0.2)",
                    "rgba(75, 192, 192, 0.2)",
                    "rgba(153, 102, 255, 0.2)",
                    "rgba(255, 159, 64, 0.2)"


                  ]
                },

              ]
            }
          }
        />
      </div>
      <div>
  <Line
    data={{
      labels: line.map((data) => data.label),
      datasets: [
        {
          label: "revenue",
          data: line.map((data) => data.revenue),
          backgroundColor: "#064FF0",
          borderColor: "#064FF0"
        },
        {
          label: "cost",
          data: line.map((data) => data.cost),
          backgroundColor: "#ff3030",
          borderColor: "#ff3030"
        }
      ]
    }}
    options={{
      plugins: {
        title: {
          display: true,
          text: 'Line Chart ddd'
        }
      }
    }}
  />
</div>

    </div>

  )
}

export default App