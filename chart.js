var Chart = require('chart.js');
var timeChart = new Chart(ctx, {...});

function float2time(value) {
    return "T/M " + (value).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, 'M&,');
}

function renderChart(data, labels) {
    var ctx = document.getElementById("timeChart").getContext('2d');
    var timeChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"],
            datasets: [
                {
                    label: 'This week',
                    data: data[0],
                    borderColor: 'rgba(75, 192, 192, 1)',
                    backgroundColor: 'rgba(75, 192, 192, 0.2)',
                },
                {
                    label: 'Goal',
                    data: data[1],
                    borderColor: 'rgba(192, 192, 192, 1)',
                    backgroundColor: 'rgba(192, 192, 192, 0.2)',
                }
            ]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true,
                        callback: function (value, index, values) {
                            return float2time(value);
                        }
                    }
                }]
            },
        }
    });
}

function getChartData() {
    $("#loadingMessage").html('<img src="./giphy.gif" alt="" srcset="">');
    $.ajax({
        url: "http://localhost:3000/chartdata",
        success: function (result) {
            $("#loadingMessage").html("");
            var data = [];
            data.push(result.thisWeek);
            data.push(result.goal);
            var labels = result.labels;
            renderChart(data, labels);
        },
        error: function (err) {
            $("#loadingMessage").html("Error");
        }
    });
}

$("#renderBtn").click(
    function () {
        getChartData();
    }
);