import { FormControl, MenuItem, Select, Card, CardContent } from '@material-ui/core';
import React, { useState, useEffect } from 'react';
import InfoBox from './components/InfoBox/InfoBox';
import Map from './components/map/Map';
import Table from './components/Table/Table';
import LineGraph from './components/LineGraph/LineGraph';
import { sortData } from './utils/sort_data';
import {prettyPrint} from './utils/prettyStat';

import './App.css';

const App = () => {

  const [countries, setcountries] = useState<any[]>([]);
  const [country, setcountry] = useState("worldwide");
  const [contryInfo, setcontryInfo] = useState<{ [prop: string]: any }>({});
  const [tableData, settableData] = useState<any[]>([]);
  const [mapCenter, setmapCenter] = useState({lat: 34.80746, lng: -40.4796});
  const [mapZoom, setmapZoom] = useState<number>(3);
  const [mapcountries, setmapcountries] = useState([]);

  const onCountyChange = async (event: any) => {
    const countryCode = event.target.value;
    const url = countryCode === 'worldwide' ?
      "https://disease.sh/v3/covid-19/all" : `https://disease.sh/v3/covid-19/countries/${countryCode}?strict=true`

    await fetch(url)
      .then((response: any) => response.json())
      .then(data => {
        setcountry(countryCode);
        setcontryInfo(data);
        if(data.countryInfo && data.countryInfo.lat && data.countryInfo.long){
          setmapCenter({lat: data.countryInfo.lat, lng: data.countryInfo.long});
        }
        setmapZoom(3);
      })
  };


  useEffect(() => {
    const url = "https://disease.sh/v3/covid-19/all";
    fetch(url)
      .then((response: any) => response.json())
      .then(data => {
        setcontryInfo(data);
      })
  }, []);


  useEffect(() => {//fill DropDown
    const getCountriesData = async () => {
      await fetch("https://disease.sh/v3/covid-19/countries ")
        .then((response: any) => response.json())
        .then(data => {
          const countries: any[] = data.map((country: any) => (
            {
              name: country.country,//United States
              value: country.countryInfo.iso2//UK
            }));
          const sortedData: any[] = sortData(data);
          settableData(sortedData);
          setmapcountries(data);//al countries Information
          setcountries([...countries]);
        });

    }
    getCountriesData();
  }, []);

  return (
    <div className="app">

      <div className="app_left">
        <div className="app_header">
          <h1>Covid Tracker</h1>
          <FormControl className="app_dropdown">
            <Select variant="outlined" value={country}
              onChange={onCountyChange}>
              <MenuItem value="worldwide">Worldwide</MenuItem>
              {countries.map((country: any) => <MenuItem
                value={country.name}
                key={country.name}
              >{country.name}</MenuItem>)}
            </Select>
          </FormControl>
        </div>


        <div className="app_stats">
          <InfoBox
            title="Coronavirus Cases"
            cases={prettyPrint(contryInfo.todayCases)}
            total={prettyPrint(contryInfo.cases)}
          />

          <InfoBox
            title="Recovered"
            cases={prettyPrint(contryInfo.todayRecovered)}
            total={prettyPrint(contryInfo.recovered)}
          />

          <InfoBox
            title="Deaths"
            cases={prettyPrint(contryInfo.todayDeaths)}
            total={prettyPrint(contryInfo.deaths)}
          />
        </div>

        <Map 
          center={mapCenter}
          zoom={mapZoom}
          countries={mapcountries}
          cases="cases"
        />
      </div>

      <Card className="app_right">
        <CardContent>
          <h3>Live Cases By County</h3>
          {/*table*/}
          <Table countries={tableData}>

          </Table>

          <h3>Worldwide new cases</h3>
          <LineGraph 
            casesType="cases"
          />
        </CardContent>
      </Card>
    </div>
  );
}

export default App;
