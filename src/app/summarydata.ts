export class SummaryChartData{
    chartName: string;
    categories: SummaryChartCategory[];
  }
  
  export class SummaryChartCategory{
    categoryName: string;
    objects: SummaryChartObject[];
  }
  
  class SummaryChartObject{
    objectName: string;
    objectValue: string;
  }