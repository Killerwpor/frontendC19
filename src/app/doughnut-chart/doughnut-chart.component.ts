import { doughnutData } from "./../doughnutData";
import { ChartDataSets } from "chart.js";
import { Component, OnInit, Input } from "@angular/core";
import { MultiDataSet, Label } from "ng2-charts";

@Component({
  selector: "app-doughnut-chart",
  templateUrl: "./doughnut-chart.component.html",
  styleUrls: ["./doughnut-chart.component.css"]
})
export class DoughnutChartComponent implements OnInit {

  
  spectraGreen: string = "#40b987";
  spectraBlue: string = "rgba(0, 229, 255,1.0)";
  spectraRed: string = "rgba(255, 82, 82,1.0)";

  public doughnutChartOptions = {
    responsive: true,
    maintainAspectRation: true,
    legend: {
      display: true
    },
  };

  doughnutColor: any = [
    {
      backgroundColor: [this.spectraGreen, this.spectraRed, this.spectraBlue],
      borderColor: [this.spectraGreen, this.spectraRed, this.spectraBlue]
    }
  ];

  @Input() doughnutChartData: MultiDataSet;
  @Input() doughnutChartLabels;

  public doughnutChartType = "doughnut";

  constructor() {}

  ngOnInit() {}
}
