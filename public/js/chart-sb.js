$(document).ready(function () {
  $.ajax({
    url: "http://localhost:3000/api/tasks",
    method: "GET",
    success: function (data) {
      console.log(data);
      var taskMinutesArr = [];
      var taskGoalArr = [];

      for (var i in data) {
        taskMinutesArr.push(data[i].task_minutes);
        taskGoalArr.push(data[i].task_goal);
      }
      // console.log(taskMinutesArr);
      // console.log(taskGoalArr);
      var chartdata = {
        labels: taskMinutesArr,
        datasets: [{
          label: 'Minutes',
          backgroundColor: 'rgba(200, 200, 200, 0.75)',
          borderColor: 'rgba(200, 200, 200, 0.75)',
          hoverBackgroundColor: 'rgba(200, 200, 200, 1)',
          hoverBorderColor: 'rgba(200, 200, 200, 1)',
          data: taskMinutesArr
        }]
      };

      var ctx = $("#mycanvas");

      var barGraph = new Chart(ctx, {
        type: 'bar',
        data: chartdata
      });
    },
    error: function (data) {
      console.log(data);
    }
  });
});