google.charts.load("current", {packages:["corechart"]});
google.charts.setOnLoadCallback(drawChart);
function drawChart() {
  var data = google.visualization.arrayToDataTable([
    ["target type", "attack probability", { role: "style" } ],
    ["Ant", 0.2, "#b87333"],
    ["Ant-mimicking jumping spider", 0.25, "#b87333"],
    ["Non-mimetic jmuping spider", 0.75, "#b87333"]
  ]);

  var view = new google.visualization.DataView(data);
  view.setColumns([0, 1,
                   { calc: "stringify",
                     sourceColumn: 1,
                     type: "string",
                     role: "annotation" },
                   2]);

  var options = {
    title: "The probability of observing a predator attack based on target type",
    width: 900,
    height: 700,
    backgroundColor: '#ECECEC',
    bar: {groupWidth: "95%"},
    legend: { position: "none" },
  };
  var chart = new google.visualization.BarChart(document.getElementById("googleChart"));
  chart.draw(view, options);
}