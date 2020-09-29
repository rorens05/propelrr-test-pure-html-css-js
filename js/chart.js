// charts
const LINE_CHART_THEME = {
  fill: true,
  lineTension: 0.3,
  backgroundColor: "rgba(225, 204,255, 0)",
  borderCapStyle: "butt",
  borderDash: [],
  borderDashOffset: 0.0,
  borderWidth: 1,
  borderJoinStyle: "miter",
  pointBorderColor: "rgb(150, 150,150, 58)",
  pointBackgroundColor: "rgb(255, 255, 255)",
  pointBorderWidth: 3,
  pointHoverRadius: 5,
  pointHoverBackgroundColor: "rgb(100, 100, 100)",
  pointHoverBorderColor: "rgba(220, 220, 220,1)",
  pointHoverBorderWidth: 1,
  pointRadius: 1,
  pointHitRadius: 10,
};

var ctx = document.getElementById("salesChart");
var salesChart = new Chart(ctx, {
  type: "line",
  data: {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
      {
        data: [10, 16, 18, 5, 10, 17, 1],
        label: "Lost",
        borderColor: "rgb(255, 0, 0)",
        ...LINE_CHART_THEME,
      },
      {
        data: [30, 35, 38, 46, 41, 50, 61],
        label: "Sales",
        borderColor: "rgb(0, 255, 0)",
        ...LINE_CHART_THEME,
      },
    ],
  },
  options: {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  },
});

var ctx = document.getElementById("popularChart");
var popularChart = new Chart(ctx, {
  type: "pie",
  data: {
    labels: ["Mobile", "Web", "Desktop", "SEO", "IOT"],
    datasets: [
      {
        data: [22, 35, 8, 15, 20],
        backgroundColor: [
          "#F7464A",
          "#46BFBD",
          "#FDB45C",
          "#949FB1",
          "#4D5360",
        ],
        hoverBackgroundColor: [
          "#FF5A5E",
          "#5AD3D1",
          "#FFC870",
          "#A8B3C5",
          "#616774",
        ],
      },
    ],
  },
});

var ctx = document.getElementById("salesGoalChart");
var salesGoalChart = new Chart(ctx, {
  type: "doughnut",
  data: {
    labels: ["Progress", "Remaining"],
    datasets: [
      {
        data: [75, 25],
        backgroundColor: ["#00ff00"],
        hoverBackgroundColor: ["#00ff00"],
      },
    ],
  },
});

var ctx = document.getElementById("monthlyProgressChart");
var monthlyProgressChart = new Chart(ctx, {
  type: "line",
  data: {
    labels: ["", "", "", "", ""],
    datasets: [
      {
        label: "Month Progress",
        data: [40, 44, 60, 80, 100],
        borderColor: ["#0000ff"],
        ...LINE_CHART_THEME,
      },
    ],
  },
});
