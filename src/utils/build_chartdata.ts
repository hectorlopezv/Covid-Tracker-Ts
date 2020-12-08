// data: [{x:10 , y:20}, {x:20 , y: 50}]

export const buildChartData = (data: any, casesTypes: 'cases' | 'deaths' | 'recovered' = 'cases') => {
        const chartData: { x: any; y: number; }[] = [];
        let lastDataPoint: any;

        for (let date in data[casesTypes]) {
             if (lastDataPoint){
                 const newDataPoint = {
                     x: date,
                     y: data['cases'][date] - lastDataPoint
                 }
                 chartData.push(newDataPoint);
             }
             lastDataPoint = data['cases'][date];
        }
        return chartData;
}
