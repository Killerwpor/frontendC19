import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-bar-chart",
  templateUrl: "./bar-chart.component.html",
  styleUrls: ["./bar-chart.component.css"]
})
export class BarChartComponent implements OnInit {
  public barChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true,
    scales: {
      xAxes: [
        {
          id: "x-axis-0",
          position: "bottom",
          ticks: {
            fontColor: "white",
            fontSize: 20,
            beginAtZero: true
          },
          gridLines: {
            color: "rgba(0,0,0,0)"
          }
        }
      ],
      yAxes: [
        {
          id: "y-axis-1",
          position: "left",
          ticks: {
            fontColor: "white",
            fontSize: 20,
            beginAtZero: true
          },
          gridLines: {
            color: "rgba(0,0,0,0)"
          }
        }
      ]
    }
  };

  @Input() barChartLabels;
  @Input() barChartData;

  /*
  
  public barChartLabels = ["2006", "2007", "2008", "2009"];
  public barChartData = [
    { data: [65, 42, 54, 12], label: "Serie A", backgroundColor: "rgb(255,255,255)",borderColor: "rgb(255,255,255)", hoverBackgroundColor: "rgb(255,255,255)"},
    { data: [46, 12, 78, 45], label: "Serie B" }
  ];


  */

  public barChartType = "bar";

  public barChartLegend = true;

  constructor() {}

  animateChart() {
    this.barChartData.slice();
  }

  ngOnInit() {}
}
