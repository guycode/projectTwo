function renderChart(data, labels) {
    var ctx = document.getElementById("timeChart").getContext('2d');
    var timeChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: labels,
            datasets: [{
                label: 'This week',
                data: data,
            }]
        },
    });
}




$("#renderBtn").click(
    function () {
        data = [0, 4, 10, 5, 16, 20, 9];
        labels = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];
        renderChart(data, labels);
    })