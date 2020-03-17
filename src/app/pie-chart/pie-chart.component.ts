import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-pie-chart",
  templateUrl: "./pie-chart.component.html",
  styleUrls: ["./pie-chart.component.css"]
})
export class PieChartComponent implements OnInit {
  //public pieChartData = [120,150,77,46];
  //public pieChartLabels = ['Data 1','Data 2','Data 3','Data 4'];

  spectraGreen: string = "#40b987";
  spectraBlue: string = "rgba(0, 229, 255,1.0)";
  spectraRed: string = "rgba(255, 82, 82,1.0)"

  @Input() pieChartData;
  @Input() pieChartLabels: string[];

  public pieChartType = "pie";
  public pieChartOptions = {
    responsive: true
  };

  public pieChartColors: Array<any> = [
    {
      backgroundColor: [this.spectraGreen, this.spectraBlue, this.spectraRed],
      borderColor: [
        this.spectraGreen,
        this.spectraBlue,
        this.spectraRed
      ]
    }
  ];

  constructor() {}

  ngOnInit() {}
}
