import { doughnutData } from "./../doughnutData";
import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-progress-panel",
  templateUrl: "./progress-panel.component.html",
  styleUrls: ["./progress-panel.component.css"]
})
export class ProgressPanelComponent implements OnInit {
  
  @Input() progressCharts: doughnutData[];

  chosenProgress: doughnutData;
  
  constructor() {}

  ngOnInit() {
    this.chosenProgress = this.progressCharts[0];
  }
  changeProgress(num) {
    this.chosenProgress = this.progressCharts[num];
  }
}
