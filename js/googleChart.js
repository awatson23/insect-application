google.charts.load("current", {packages:["corechart"]});
google.charts.setOnLoadCallback(drawChart);
function drawChart() {
  var data = google.visualization.arrayToDataTable([
    ["target type", "attack probability", { role: "style" } ],
    ["Ant", 0.2, "#87a350"],
    ["Ant-mimicking jumping spider", 0.25, "#9acd32"],
    ["Non-mimetic jumping spider", 0.75, "#698c22"]
  ]);

  var view = new google.visualization.DataView(data);
  view.setColumns([0, 1,
                   { calc: "stringify",
                     sourceColumn: 1,
                     type: "string",
                     role: "annotation" },
                   2]);

  var options = {
    title: "The probability of observing a predator attack based on target type (p)",
    width: window.innerWidth*0.45,
    height: window.innerHeight*0.75,
    backgroundColor: '#ECECEC',
    bar: {groupWidth: "95%"},
    fontSize: 17,
    fontName: 'Raleway',
    legend: { position: "none" },
  };
  var chart = new google.visualization.BarChart(document.getElementById("googleChart"));
  chart.draw(view, options);
}