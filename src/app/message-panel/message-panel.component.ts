import {
  Component,
  OnInit,
  Input,
  Output
} from "@angular/core";
import {
  EventEmitter
} from '@angular/core';
import {
  DatePipe
} from '@angular/common';

import * as $ from 'jquery';




@Component({
  selector: "app-message-panel",
  templateUrl: "./message-panel.component.html",
  styleUrls: ["./message-panel.component.css"]
})
export class MessagePanelComponent implements OnInit {
  dt;
  constructor(public datepipe: DatePipe) {
    this.dt = new Date().toLocaleDateString('en-US');
  }


  ngOnInit() {
  }

  @Input() userType: string;
  @Input() userMessages: string;
  @Input() userObservations: string;
  @Output() changeMetric = new EventEmitter < any > ();
  @Output() emitMetric = new EventEmitter < any > ();
  @Output() emitDate = new EventEmitter < any > ();

  //strings
  messagesString: string;
  observationString: string;

  allMetrics: any;

  //El texto a mostrar
  chosenText: string;
  //Que elementos mostrar de tabs
  toggle: string = 'date';

  changeTab(name) {
    this.toggle = name;
    this.changeMetric.emit(name);
  }

  public recieveMetricPackage(metricPackage) {
    this.allMetrics = metricPackage;
  }

  public loadMetric(arr, num) {
    var metricInfo = {
      arr: arr,
      num: num,
    }
    this.emitMetric.emit(metricInfo);
  }

  public changeDate(date) {
    var inputValue = ( < HTMLInputElement > document.getElementById("metricDate")).value;
    this.dt = this.datepipe.transform(inputValue, 'MM/dd/yyyy');
    this.emitDate.emit(this.dt);
    this.changeTab('date');
  }


}
