import { SummaryChartData } from './summarydata';
import { barData } from './barData';
import { doughnutData } from './doughnutData';
import { radarData } from './radarData';
import { pieData } from './pieData';
import { lineData } from './lineData';
import { CheckChartData } from './checkdata';

export class chartsData{
    barCharts: barData[];
    doughnutCharts: doughnutData[];
    radarCharts: radarData[];
    pieCharts: pieData[];
    lineCharts: lineData[];
    checkCharts: CheckChartData[];
    summaryCharts: SummaryChartData[];
}