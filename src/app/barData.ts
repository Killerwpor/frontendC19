export class barData{
    chartName: string;
    barLabels: string[];
    barSeries: series[];
}

class series{
    data: number[];
    label: string;
    backgroundColor: string;
    hoverBackgroundColor: string;
    borderColor: string;
}