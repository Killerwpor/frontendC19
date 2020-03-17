import { Component, OnInit, Input } from '@angular/core';
import { faCheckCircle, faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import { CheckChartData, CheckChartCategory } from '../checkdata';

@Component({
  selector: 'app-check-chart',
  templateUrl: './check-chart.component.html',
  styleUrls: ['./check-chart.component.css']
})

export class CheckChartComponent implements OnInit {

  faCheckCircle = faCheckCircle;
  faTimesCircle = faTimesCircle;

  chosenCategory: CheckChartCategory;

  @Input() checkData;

  // data: CheckChartData = {
  //   categories: [
  //     {
  //       categoryName: "Recipiente correcto?",
  //       objects: [
  //         {
  //           objectName: "Evidencia 1",
  //           objectValue: true
  //         },
  //         {
  //           objectName: "Evidencia 2",
  //           objectValue: false
  //         },
  //         {
  //           objectName: "Evidencia 3",
  //           objectValue: false
  //         },
  //         {
  //           objectName: "Evidencia 4",
  //           objectValue: true
  //         }
  //       ]
  //     },
  //     {
  //       categoryName: "Fue robada?",
  //       objects: [
  //         {
  //           objectName: "Evidencia 1",
  //           objectValue: false
  //         },
  //         {
  //           objectName: "Evidencia 2",
  //           objectValue: true
  //         },
  //         {
  //           objectName: "Evidencia 3",
  //           objectValue: true
  //         },
  //         {
  //           objectName: "Evidencia 4",
  //           objectValue: true
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

  startCategories(){
    this.ngOnInit();
  }

}


