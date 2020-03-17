export class CheckChartData{
  chartName: string;
  categories: CheckChartCategory[];
}

export class CheckChartCategory{
  categoryName: string;
  objects: CheckChartObject[];
}

class CheckChartObject{
  objectName: string;
  objectValue: boolean;
}