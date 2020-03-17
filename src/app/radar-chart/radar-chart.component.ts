import { Component, OnInit, Input } from "@angular/core";
import { Label } from "ng2-charts";
import { ChartDataSets, ChartType, RadialChartOptions } from "chart.js";

@Component({
  selector: "app-radar-chart",
  templateUrl: "./radar-chart.component.html",
  styleUrls: ["./radar-chart.component.css"]
})
export class RadarChartComponent implements OnInit {
  public radarChartOptions: RadialChartOptions = {
    responsive: true,
    maintainAspectRatio: true,
    title: {
      display: true,
      text: '',
      fontColor: 'white'
    },
    scale: {
      ticks: {
        beginAtZero: true,
        fontColor: 'blue',
        fontSize: 15,
        showLabelBackdrop: true,
      },
      pointLabels : {
        fontColor : '#40b987',
        fontSize: 15
      },
      gridLines: {
        color: 'white'
      },
      angleLines: {
        color: 'white'
      }
    }
  };

  
  /*
  
  public radarChartLabels: Label[] = [
    "Eating",
    "Drinking",
    "Sleeping",
    "Designing",
    "Coding",
    "Cycling",
    "Running"
  ];

  public radarChartData: ChartDataSets[] = [
    {
      data: [90, 100, 80, 150, 110, 120, 130],
      label: "Habitos",
      backgroundColor: "rgba(0, 230, 118,0.5)",
      pointBorderColor: "rgba(0, 230, 118,1.0)",
      pointBackgroundColor: "rgba(0, 230, 118,1.0)",
      borderColor: "rgba(0, 230, 118,1.0)"
    },
  ];
  
  
  */
 @Input() radarChartLabels: Label[];
 @Input() radarChartData: ChartDataSets[];

  public radarChartType: ChartType = "radar";

  constructor() {}

  ngOnInit() {}
}
