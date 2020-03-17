import { Component, OnInit, ViewChild, Input } from "@angular/core";
import { ChartDataSets, ChartOptions } from "chart.js";
import { Color, BaseChartDirective, Label } from "ng2-charts";

@Component({
  selector: "app-line-chart",
  templateUrl: "./line-chart.component.html",
  styleUrls: ["./line-chart.component.css"]
})
export class LineChartComponent implements OnInit {
  @Input() lineChartData: ChartDataSets[];
  @Input() lineChartLabels: Label[];

  public lineChartOptions: ChartOptions = {
    responsive: true,
    maintainAspectRatio: true,
    elements: {
      point: {
        radius: 0
      },
      line: {
        fill: false,
        borderWidth: 1
      }
    },
    scales: {
      xAxes: [
        {
          id: "x-axis-0",
          position: "bottom",
          ticks: {
            fontColor: "white",
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
          gridLines: {
            color: "rgba(0,0,0,0)"
          },
          ticks: {
            fontColor: "white"
          }
        }
      ]
    },
    legend: {
      position: 'bottom',
      labels: {
        fontColor: 'white',
        fontFamily: 'Arial',
        fontSize: 15
      }
    }
  };
  public lineChartColors: Color[] = [
    {
      // green
      backgroundColor: "rgba(64,185,135,0.5) ",
      borderColor: "#40b987",
      pointBackgroundColor: "rgba(148,159,177,1)",
      pointBorderColor: "#fff",
      pointHoverBackgroundColor: "#fff",
      pointHoverBorderColor: "rgba(148,159,177,0.8)"
    },
    {
      // green
      backgroundColor: "rgba(0, 229, 255, 0.5) ",
      borderColor: "rgba(0, 229, 255, 1.0)",
      pointBackgroundColor: "rgba(148,159,177,1)",
      pointBorderColor: "#fff",
      pointHoverBackgroundColor: "#fff",
      pointHoverBorderColor: "rgba(148,159,177,0.8)"
    },
    {
      // green
      backgroundColor: "rgba(255, 82, 82, 0.5) ",
      borderColor: "rgba(255, 82, 82, 1.0)",
      pointBackgroundColor: "rgba(148,159,177,1)",
      pointBorderColor: "#fff",
      pointHoverBackgroundColor: "#fff",
      pointHoverBorderColor: "rgba(148,159,177,0.8)"
    }
  ];
  public lineChartLegend = true;
  public lineChartType = "line";

  @ViewChild(BaseChartDirective, { static: true }) chart: BaseChartDirective;

  constructor() {}

  ngOnInit() {}
}
