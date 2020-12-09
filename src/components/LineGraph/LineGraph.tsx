import React, {useState, useEffect, useRef} from 'react'
import { Line, LinearComponentProps } from 'react-chartjs-2';
import {buildChartData} from '../../utils/build_chartdata';
import numeral from 'numeral';
import * as _ from 'lodash';
export interface LineGraphProps {
    casesType: string;
    country: string;
}

const options = {
    legend: {
      display: false,
    },
    elements: {
      point: {
        radius: 0,
      },
    },
    maintainAspectRatio: false,
    tooltips: {
      mode: "index",
      intersect: false,
      callbacks: {
        label: function (tooltipItem: any, data: any) {
          return numeral(tooltipItem.value).format("+0,0");
        },
      },
    },
    scales: {
      xAxes: [
        {
          type: "time",
          time: {
            format: "MM/DD/YY",
            tooltipFormat: "ll",
          },
        },
      ],
      yAxes: [
        {
          gridLines: {
            display: false,
          },
          ticks: {
            // Include a dollar sign in the ticks
            callback: function (value: any, index: any, values: any) {
              return numeral(value).format("0a");
            },
          },
        },
      ],
    },
};


const LineGraph: React.FC<LineGraphProps> = (props) => {

    const [data, setdata] = useState<{[prop: string]:any}>({});
    const {casesType, country} = props;

    useEffect(() => { 

        const fetchData = async () => {

          const temp = country ?? 'worldwide';
            const url = temp === 'worldwide'? 
            "https://disease.sh/v3/covid-19/historical/all?lastdays=120":
            `https://disease.sh/v3/covid-19/historical/${country}?lastdays=30`
            await fetch(url)
            .then((response: any) => response.json())
            .then(data => {
                let chartData = buildChartData(data.timeline?? data, casesType);
                const newCopy = _.cloneDeep(chartData);
                setdata(newCopy);
            });
        };
        fetchData();
    }, [casesType, country]);
    return ( 
        <div>
        {data?.length > 0 &&
            <Line
                
                data={{
                datasets: [
                    {
                    backgroundColor: "rgba(204, 16, 52, 0.5)",
                    borderColor: "#CC1034",
                    data: data,
                    },
                ],
                }}
                options={options}
            />
        } 

        </div>
     );
}
 
export default LineGraph;