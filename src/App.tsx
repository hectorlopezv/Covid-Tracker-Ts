import { FormControl, MenuItem, Select } from '@material-ui/core';
import React, {useState, useEffect} from 'react';
import InfoBox from './components/InfoBox/InfoBox';
import './App.css';



const App = () => {

  const [countries, setcountries] = useState<any[]>([]);
  const [country, setcountry] = useState("worldwide");

  useEffect(() =>{//fill DropDown
      const getCountriesData = async () => {
        await fetch("https://disease.sh/v3/covid-19/countries")
        .then((response: any) => response.json())
        .then(data => {
            const countries: any[] = data.map((country: any) => (
              {
                name: country.country,//United States
                value: country.countryInfo.iso2//UK
              }));
        setcountries([...countries]);
        });
       
      }
      getCountriesData();
  }, []);

  return (
    <div className="app">
      <div className="app_header">
        <h1>Covid Tracker</h1>
          <FormControl className="app_dropdown">
            <Select variant="outlined" value={country} onChange={(e:any) => setcountry(e.target.value)}>
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
            title ="Coronavirus Cases"
            cases = {120}
            total= {2000}  
          />
          
          <InfoBox
            title ="Recovered"
            cases = {12345}
            total= {5000}  
          />

          <InfoBox
            title ="Deaths"
            cases = {20}
            total= {4000}  
          />
        {/*Info boxs * title="corona cases"*/}
        {/*Info boxs  title="corna recoveries"*/}
        {/*Info boxs title="corona deaths"*/}
      </div>

      
      {/*table*/}
      {/*graph*/}

      {/*map*/}
    </div>
  );
}

export default App;
