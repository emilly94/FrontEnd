import React, { useEffect, useState } from 'react';
import Loader from "react-loader-spinner";

import CountryItems from '../components/CountryItems';
import '../styles/Dashboard.css';

const Dashboard = () => {
  const [countries, setCountries] = useState([]);
  useEffect(() => {
    fetch('https://api.covid19api.com/summary', {mode:"cors",}).then((response) => {
      response.json().then((dados) => {
        setCountries(dados.Countries);
      })
    })
  },[] );

return(
  <>
  <div className="container"> 
    <h1>Dados Covid-19</h1>
    <ul className="list">
      {countries.length !== 0 ? countries.map((country, index) => (
          <CountryItems
            key={index}
            name={country.Country}
            totalCases={country.TotalConfirmed} 
            recovered={country.TotalRecovered} 
            deaths={country.TotalDeaths}/>
            )) : (
              <div className="loader">
                <Loader
                  type="TailSpin"
                  color="#00BFFF"
                  height={100}
                  width={100}
              />
              </div>
        ) } 
    </ul>
  </div>
  </>
)}
export default Dashboard;