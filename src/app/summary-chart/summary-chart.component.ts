import { SummaryChartCategory, SummaryChartData } from './../summarydata';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-summary-chart',
  templateUrl: './summary-chart.component.html',
  styleUrls: ['./summary-chart.component.css']
})
export class SummaryChartComponent implements OnInit {

  chosenCategory: SummaryChartCategory;

  @Input() checkData;

  // checkData: SummaryChartData = {
  //   chartName:"AAAAAAAAH",
  //   categories: [
  //     {
  //       categoryName: "Recipiente correcto?",
  //       objects: [
  //         {
  //           objectName: "Evidencia 1",
  //           objectValue: "2"
  //         },
  //         {
  //           objectName: "Evidencia 2",
  //           objectValue: "2"
  //         },
  //         {
  //           objectName: "Evidencia 3",
  //           objectValue: "2"
  //         },
  //         {
  //           objectName: "Evidencia 4",
  //           objectValue: "2"
  //         }
  //       ]
  //     },
  //     {
  //       categoryName: "Fue robada?",
  //       objects: [
  //         {
  //           objectName: "AAAAAAAAAAAAH",
  //           objectValue: "1"
  //         },
  //         {
  //           objectName: "Evidencia 2",
  //           objectValue: "2"
  //         },
  //         {
  //           objectName: "Evidencia 3",
  //           objectValue: "2"
  //         },
  //         {
  //           objectName: "Evidencia 4",
  //           objectValue: "2"
  //         }
  //       ]
  //     }
  //   ]
  // }

  constructor() { }

  ngOnInit() {
    this.chooseCategory(this.checkData.categories[0]);
  }

  chooseCategory(cat){
    this.chosenCategory = cat;
  }

}
