import {
  SummaryChartComponent
} from './../summary-chart/summary-chart.component';
import {
  CheckChartComponent
} from './../check-chart/check-chart.component';
import {
  ChartDataSets
} from "chart.js";
import {
  lineData
} from "./../lineData";
import {
  pieData
} from "./../pieData";
import {
  radarData
} from "./../radarData";
import {
  doughnutData
} from "./../doughnutData";
import {
  ChartPanelInfo,
  ChartPanelByCompanyInfo,
  ChartPanelBySupervisorInfo,
  ChartPanelByDateInfo
} from "./../chartPanelInfo";
import {
  ChartPanelService
} from "./chart-panel.service";
import {
  BarChartComponent
} from "./../bar-chart/bar-chart.component";
import {
  barData
} from "./../barData";
import {
  chartsData
} from "./../chartsData";
import {
  faCar,
  faChartPie,
  faFireExtinguisher,
  faStarOfLife,
  faBuilding
} from "@fortawesome/free-solid-svg-icons";
import {
  Component,
  OnInit,
  Input,
  ViewChild,
  Output,
  EventEmitter
} from "@angular/core";
import {
  trigger,
  state,
  style,
  animate,
  transition
} from "@angular/animations";
import {
  Router
} from "@angular/router";
import {
  CheckChartData
} from "../checkdata";
import {
  SummaryChartData
} from './../summarydata';
import {
  formatDate
} from '@angular/common';

@Component({
  selector: "app-chart-panel",
  templateUrl: "./chart-panel.component.html",
  styleUrls: ["./chart-panel.component.css"]
})
export class ChartPanelComponent implements OnInit {

  public minDate: Date = new Date("05/07/2017");
  public maxDate: Date = new Date("12/31/2020");
  public value: Date = new Date();
  public dateStr: string = "";

  @Input() id: string;
  @Input() chosen: any;
  @Input() simulator: string;
  @Input() company: string;
  @Input() userType: string;

  @Output() emitMetrics = new EventEmitter<any>();

  @ViewChild(CheckChartComponent, {
    static: false
  })
  check: CheckChartComponent;
  @ViewChild(SummaryChartComponent, {
    static: false
  })
  summary: CheckChartComponent;

  private data = new ChartPanelInfo();
  private companyData = new ChartPanelByCompanyInfo();
  private supervisorData = new ChartPanelBySupervisorInfo();
  private dateData = new ChartPanelByDateInfo();

  chartsPrepared = false;
  show: boolean = true;
  toggle: string = "";

  spectraGreen: string = "rgba(64,185,135,0.6)";
  spectraBlue: string = "rgba(0, 229, 255,1.0)";
  spectraRed: string = "rgba(255, 82, 82,1.0)";

  hasCharts: boolean = false;
  //Chart presentada
  chosenChart: any;
  //Todas las charts
  allCharts: chartsData = {
    barCharts: [],
    doughnutCharts: [],
    radarCharts: [],
    pieCharts: [],
    lineCharts: [],
    checkCharts: [],
    summaryCharts: []
  };

  metricType: string = "";

  //Datos de respuesta de consulta
  response: any;

  constructor(public chartService: ChartPanelService) {}

  getCharts() {
    this.refreshCharts();

    if (this.metricType == 'byUser') {
      this.data.documentType = this.chosen.documentType;
      this.data.documentNumber=this.chosen.documentNumber;
      this.data.simulator = this.simulator;

   

      this.chartService.postChartPanel(this.data, this.metricType).subscribe(result => {
        this.response = result;
        if (this.response != null) {
          this.prepareCharts(this.response[0].graficos);
        } else {
          this.noCharts();
        }
      });
    }

    if (this.metricType == 'bySupervisor') {
      this.supervisorData.supervisor = this.id;
      this.supervisorData.simulator = this.simulator;

  

      this.chartService.postChartPanel(this.supervisorData, this.metricType).subscribe(result => {
        this.response = result;
        if (this.response != null) {
          this.prepareCharts(this.response[0].graficos);
        } else {
          this.noCharts();
        }
      });
    }

    if (this.metricType == 'byCompany') {
  
    var companySelected=JSON.parse(sessionStorage.getItem("companySelected"))
      this.companyData.company = companySelected.name;
      this.companyData.simulator = this.simulator;
      this.chartService.postChartPanel(this.companyData, this.metricType).subscribe(result => {
        this.response = result;
        if (this.response != null) {
          this.prepareCharts(this.response[0].graficos);
        } else {
          this.noCharts();
        }
      });
    }

    if (this.metricType == 'byDate') {
      this.dateData.date = this.dateStr;
      this.dateData.documentType = this.chosen.documentType;
      this.dateData.documentNumber=this.chosen.documentNumber;
      this.dateData.simulator = this.simulator;

      this.chartService.postChartPanel(this.dateData, this.metricType).subscribe(result => {
        this.response = result;
        if (this.response != null) {
          this.prepareCharts(this.response[0].graficos);
        } else {
          this.noCharts();
        }
      });
    }
  }

  changeMetricToggle(metricType) {
    switch (metricType) {
      case "date":
        this.metricType = "byDate"
        break;
      case "user":
        this.metricType = "byUser";
        break;
      case "supervisor":
        this.metricType = "bySupervisor";
        break;
      case "company":
        this.metricType = "byCompany";
        break;
      }
      this.getCharts();
  }

  noCharts() {
    this.show = true;
    this.toggle = "null";
  }

  prepareCharts(data) {
    if (!this.chartsPrepared) {
      for (let chart of data) {
        switch (chart.typeGraphic) {
          case "barChart":
            this.createBarChart(chart);
            break;
          case "doughnutChart":
            this.createDoughnutChart(chart);
            break;
          case "radarChart":
            this.createRadar(chart);
            break;
          case "pieChart":
            this.createPie(chart);
            break;
          case "lineChart":
            this.createLine(chart);
            break;
          case "checkChart":
            this.createCheck(chart);
            break;
          case "summaryChart":
            this.createSummary(chart);
            break;
        }
      }
      this.chartsPrepared = true;
      this.emitMetrics.emit(this.allCharts);
    }
  }

  createBarChart(data) {
    let str = data.groups[0].labels;
    var labelArr = str.split(",");

    var dataStr = data.groups[0].data;
    var dataArr = dataStr.split(",");
    for (let i = 0; i < dataArr.length; i++) {
      dataArr[i] = parseInt(dataArr[i]);
    }

    let newBar: barData = {
      chartName: data.name,
      barLabels: labelArr,
      barSeries: [{
        data: dataArr,
        label: "Grupo 1",
        backgroundColor: this.spectraGreen,
        hoverBackgroundColor: this.spectraGreen,
        borderColor: this.spectraGreen
      }]
    };
    this.allCharts.barCharts.push(newBar);
  }

  createDoughnutChart(data) {
    let str = data.groups[0].labels;
    var labelArr = str.split(",");

    var dataStr = data.groups[0].data;
    var dataArr = dataStr.split(",");
    for (let i = 0; i < dataArr.length; i++) {
      dataArr[i] = parseInt(dataArr[i]);
    }

    let newDoughnut: doughnutData = {
      chartName: data.name,
      values: dataArr,
      labels: labelArr
    };

    this.allCharts.doughnutCharts.push(newDoughnut);
  }

  createRadar(data) {
    let str = data.groups[0].labels;
    var labelArr = str.split(",");

    var dataStr = data.groups[0].data;
    var dataArr = dataStr.split(",");
    for (let i = 0; i < dataArr.length; i++) {
      dataArr[i] = parseInt(dataArr[i]);
    }

    let newRadar: radarData = {
      chartName: data.name,
      radarChartData: [{
        data: dataArr,
        label: data.groups[0].label,
        backgroundColor: this.spectraGreen,
        pointBorderColor: this.spectraGreen,
        pointBackgroundColor: this.spectraGreen,
        borderColor: this.spectraGreen
      }],
      radarChartLabels: labelArr
    };

    this.allCharts.radarCharts.push(newRadar);
  }

  createPie(data) {
    let str = data.groups[0].labels;
    var labelArr = str.split(",");

    var dataStr = data.groups[0].data;
    var dataArr = dataStr.split(",");
    for (let i = 0; i < dataArr.length; i++) {
      dataArr[i] = parseInt(dataArr[i]);
    }

    let newPie: pieData = {
      chartName: data.name,
      pieChartValues: dataArr,
      pieChartLabels: labelArr
    };
    this.allCharts.pieCharts.push(newPie);
  }

  createLine(data) {
    let str = data.groups[0].labels;
    var labelArr = str.split(",");

    var lineDataSets: ChartDataSets[] = [];

    for (let j = 0; j < data.groups.length; j++) {
      var dataStr = data.groups[j].data;
      var dataArr = dataStr.split(",");
      for (let i = 0; i < dataArr.length; i++) {
        dataArr[i] = parseInt(dataArr[i]);
      }

      var newdataset: ChartDataSets = {
        data: dataArr,
        label: data.groups[j].name
      };

      lineDataSets.push(newdataset);
    }

    let newLine: lineData = {
      chartName: data.name,
      lineChartLabels: labelArr,
      lineChartData: lineDataSets
    };

    this.allCharts.lineCharts.push(newLine);
  }

  //TODO Crear funcion de crear checkChart
  createCheck(data) {
    let values = data.groups;
    let newCheck: CheckChartData = {
      chartName: data.name,
      categories: []
    };

    for (let metric of values) {
      let newCat: any = {
        categoryName: metric.nameMetric,
        objects: []
      }
      for (let value of metric.metric) {
        newCat.objects.push({
          objectName: value.labels,
          objectValue: value.data
        });
      }

      newCheck.categories.push(newCat);
    }

    this.allCharts.checkCharts.push(newCheck);
  }

  createSummary(data) {
    let values = data.groups;
    let newSummary: SummaryChartData = {
      chartName: data.name,
      categories: []
    };

    for (let metric of values) {
      let newCat: any = {
        categoryName: metric.nameMetric,
        objects: []
      }
      for (let value of metric.metric) {
        newCat.objects.push({
          objectName: value.labels,
          objectValue: value.data
        });
      }

      newSummary.categories.push(newCat);
    }
    this.allCharts.summaryCharts.push(newSummary);
  }

  loadChart(type, index) {
    this.show = false;
    this.show = true;
    switch (type) {
      case "bar":
        this.toggle = "bar";
        this.chosenChart = this.allCharts.barCharts[index];
        break;
      case "doughnut":
        this.toggle = "doughnut";
        this.chosenChart = this.allCharts.doughnutCharts[index];
        break;
      case "radar":
        this.toggle = "radar";
        this.chosenChart = this.allCharts.radarCharts[index];
        break;
      case "pie":
        this.toggle = "pie";
        this.chosenChart = this.allCharts.pieCharts[index];
        break;
      case "line":
        this.toggle = "line";
        this.chosenChart = this.allCharts.lineCharts[index];
        break;
      case "check":
        this.show = false;
        this.show = true;
        this.toggle = "check";
        this.chosenChart = this.allCharts.checkCharts[index];
        this.check.ngOnInit();
        break;
      case "summary":
        this.show = false;
        this.show = true;
        this.toggle = "summary";
        this.chosenChart = this.allCharts.summaryCharts[index];
        this.summary.ngOnInit();
        break;
    }
  }

  refreshCharts() {
    this.allCharts = {
      barCharts: [],
      doughnutCharts: [],
      radarCharts: [],
      pieCharts: [],
      lineCharts: [],
      checkCharts: [],
      summaryCharts: []
    };
    this.chartsPrepared = false;
  }

  selected() {
    this.show = false;
  }

  onValueChange(args: any) {
    this.dateStr = args;
    this.refreshCharts();
  }

  ngOnInit() {
    this.dateStr = this.value.toLocaleDateString();
  }
}
