import React from "react";
import { Bar } from "react-chartjs-2";
import { MDBContainer } from "mdbreact";
class WeatherChart extends React.Component {

  state = {
    barChartOptions: {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        dataset: [
          {
            barPercentage: 1,
            gridLines: {
              display: true,
              color: "rgba(0, 0, 0, 0.1)"
            }
          }
        ],
        yAxes: [
          {
            gridLines: {
              display: true,
              color: "rgba(0, 0, 0, 0.1)"
            },
            ticks: {
              beginAtZero: true
            }
          }
        ]
      }
    }
  }

  render() {
    let temp_c=this.props.temp_c?this.props.temp_c:[];
    let dataBar= {
      labels: ["Bangalore","Chennai","Delhi","Kolkata","Mumbai"],
      datasets: [
        {
          label: "Temp in °C",
          data:temp_c,
          backgroundColor: [
            "rgba(255, 134,159,0.4)",
            "rgba(98,  182, 239,0.4)",
            "rgba(255, 218, 128,0.4)",
            "rgba(113, 205, 205,0.4)",
            "rgba(170, 128, 252,0.4)",
            "rgba(255, 177, 101,0.4)"
          ],
          borderWidth: 1,
          borderColor: [
            "rgba(255, 134, 159, 1)",
            "rgba(98,  182, 239, 1)",
            "rgba(255, 218, 128, 1)",
            "rgba(113, 205, 205, 1)",
            "rgba(170, 128, 252, 1)",
            "rgba(255, 177, 101, 1)"
          ]
        }
      ]
    };
    return (
      <MDBContainer style={{height:"250px", minwidth: "300px" ,backgroundcolor: "#cde4f1"}} lg="6" >
        <h5 className="mt-3">All Cities Graph</h5>
        <Bar data={dataBar} options={this.state.barChartOptions} />
      </MDBContainer>
    );
  }
}

export default WeatherChart;