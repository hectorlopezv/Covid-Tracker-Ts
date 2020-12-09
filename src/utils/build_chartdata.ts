// data: [{x:10 , y:20}, {x:20 , y: 50}]
import * as _ from 'lodash';

export const buildChartData = (data: any, casesTypes='cases') => {
        const chartData: { x: any; y: number; }[] = [];
        let lastDataPoint: any;
        for (let date in data[casesTypes]) {
             if (lastDataPoint){
                 const newDataPoint = {
                     x: date,
                     y: data[casesTypes][date] - lastDataPoint
                 }
                 chartData.push(newDataPoint);
             }
             lastDataPoint = data[casesTypes][date];
        }
        return _.cloneDeep(chartData);
}
